// eslint-disable-next-line
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import Sidebar from '../../Sidebar';
import '../../../assets/css/TabelGallery.css';
import axios from 'axios';
import Swal from "sweetalert2";
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const DaftarPerangkatDesa = () => {
  const [galleryData, setGalleryData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://apicurug.tegararsyadani.my.id/api/perangkat/postsPerangkat');
        const data = await response.json();
        setGalleryData(data);
      } catch (error) {
        console.error('Error fetching gallery data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Apakah Kamu Yakin?",
        text: "ingin menghapus item ini!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await axios.delete(
          `https://apicurug.tegararsyadani.my.id/api/perangkat/postsPerangkat/${id}`
        );
        setGalleryData(galleryData.filter((item) => item.id !== id));
        Swal.fire("Deleted!", "Your gallery item has been deleted.", "success");
      }
    } catch (error) {
      console.error("Error deleting gallery item:", error);
    }
  };
  

  const handleEdit = (id) => {
    navigate(`/edit-perangkat-desa/${id}`); // Navigate to edit page
  };

  const columns = useMemo(
    () => [
      { Header: 'Title', accessor: 'title' },
      { Header: 'Description', accessor: 'description' },
      {
        Header: 'Image',
        accessor: 'imageUrl',
        Cell: ({ value }) => <img src={`https://apicurug.tegararsyadani.my.id${value}`} alt={value} width={50} />,
      },
      {
        Header: 'Actions',
        accessor: 'id',
        Cell: ({ value }) => (
          <>
            <button
              onClick={() => handleEdit(value)}
              className="icon-button edit-button"
            >
              <FaEdit /> 
            </button>
            <button
              onClick={() => handleDelete(value)}
              className="icon-button delete-button"
            >
              <FaTrashAlt />
            </button>
          </>
        ),
      },
    ],
    [galleryData] // Depend on galleryData to update the table on delete
  );

  const data = useMemo(() => galleryData, [galleryData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter,
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 5 } },
    useGlobalFilter,
    usePagination
  );

  return (
    <div className="gallery-table-container">
      <Sidebar />
      <div className="gallery-table-content">
        <h1>Perangkat Desa Table</h1>
        <div className="upload-button-container">
          <button onClick={() => navigate('/UploadPerangkatDesa')} className="upload-button">
            Tambah Perangkaat Desa
          </button>
        </div>
        <div className="table-controls">
          <input
            value={globalFilter || ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search..."
            className="search-input"
          />
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="page-size-select"
          >
            {[5, 10, 20].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>

        <table {...getTableProps()} className="gallery-table">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination-container">
          <div className="pagination">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {'<<'}
            </button>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {'<'}
            </button>
            <span>
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{' '}
            </span>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              {'>'}
            </button>
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
              {'>>'}
            </button>
            <span>
              | Go to page:{' '}
              <input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  gotoPage(page);
                }}
                style={{ width: '50px' }}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaftarPerangkatDesa;
