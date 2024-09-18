"use client";

import React, { useState, useMemo } from 'react';
import { Input } from '../../components/ui/input';
import { Button } from "../../components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Forms, Registration } from '@/types';
import { useSearchParams } from 'next/navigation';
import { useUser } from '@/hooks/useUser';
import * as XLSX from 'xlsx';
import html2canvas from 'html2canvas';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import type { Content, DynamicBackground } from 'pdfmake/interfaces';
import './dark-mode.css';

interface SearchBarProps {
  formsfetched: Forms[];
  fetchedRegisters: Registration[];
}

const SearchBar: React.FC<SearchBarProps> = ({ formsfetched, fetchedRegisters }) => {
  const searchParams = useSearchParams();
  const search = searchParams.get('id');
  const { user } = useUser();
  const [searchQuery, setSearchQuery] = useState<string | null>('');
  const [loadingPDF, setLoadingPDF] = useState(false);
  const [exportPDF, setExportPDF] = useState(false);

  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const filteredRegisters = useMemo(() => {
    const formsFetchedComponentIds = formsfetched
      .filter((items) => items.formId === search)
      .map((data) => data.componentId);

    return fetchedRegisters
      .filter((items) => formsFetchedComponentIds.includes(items.component_id))
      .filter((items) => items.component_value !== '');
  }, [formsfetched, fetchedRegisters, search]);

  const uniqueUserIds = useMemo(() => {
    return Array.from(new Set(filteredRegisters.map((data) => data.user_id)));
  }, [filteredRegisters]);

  const filteredUserIds = useMemo(() => {
    return uniqueUserIds.filter((userId) => userId.toLowerCase().includes(searchQuery === null ? ''.toLowerCase() : searchQuery.toLowerCase()));
  }, [uniqueUserIds, searchQuery]);

  const columns = useMemo(() => {
    const formColumns = formsfetched
      .filter((items) => items.formId === search)
      .filter((component) => component.componentType !== 'Description')
      .map((data) => ({
        title: data.componentName,
        dataIndex: data.componentId,
        key: data.componentId,
      }));

    return [
      {
        title: 'Registry User Code',
        dataIndex: 'user_id',
        key: 'user_id',
      },
      ...formColumns,
    ];
  }, [formsfetched, search]);

  const dataSource = useMemo(() => {
    return filteredUserIds.map((userId) => {
      const record: any = { user_id: userId };

      filteredRegisters
        .filter((recordItem) => recordItem.user_id === userId)
        .forEach((item) => {
          record[item.component_id] = item.component_value;
          console.log(item);
        });

      return record;
    });
  }, [filteredUserIds, filteredRegisters]);

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(dataSource);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'table_data.xlsx');
  };

  const handleExportPDF = () => {
    setLoadingPDF(true);
    html2canvas(document.querySelector('.ant-table') as HTMLElement).then((canvas) => {
      const data = canvas.toDataURL();
      const docDefinition = {
        content: [{ image: data, width: 500 }],
        defaultStyle: { color: '#000' },
        background: { color: '#fff' } as Content | DynamicBackground,
      };
      pdfMake.createPdf(docDefinition).download('customer-details.pdf');
      setLoadingPDF(false);
    });
  };

  return (
    <div className='p-4 dark-mode'>
      <div className='flex items-center justify-between mb-4'>
        <div className='text-sm text-neutral-600 px-5'>
            List Of Responses
        </div>
        <div className='space-x-4'>
          <Button onClick={exportToExcel} variant="secondary">
            Export to Excel
          </Button>
        </div>
      </div>

      {filteredUserIds.length === 0 ? (
        <div className='text-neutral-500'>No Responses Found</div>
      ) : (
        <Table>
          <TableCaption>A list of user responses.</TableCaption>
          <TableHeader>
            <TableRow className='hover:bg-black'>
              {columns.map(column => (
                <TableHead key={column.key} className={column.key === 'user_id' ? 'w-[150px]' : ''}>
                  {column.title}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataSource.map((data) => (
              <TableRow key={data.user_id} className='hover:bg-neutral-700 hover:cursor-pointer'>
                {columns.map((column) => (
                  <TableCell key={column.key} className={column.key === 'user_id' ? 'font-medium' : ''}>
                    {data[column.dataIndex] || ''}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default SearchBar;

