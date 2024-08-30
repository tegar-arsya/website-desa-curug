import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import Sidebar from '../../Sidebar';
import '../../../assets/css/TabelGallery.css';
import axios from 'axios';

const DaftarGallery = () => {
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
        const response = await fetch('http://localhost:5000/api/gallery/postsGallery');
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
      await axios.delete(`http://localhost:5000/api/gallery/postsGallery/${id}`);
      setGalleryData(galleryData.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting gallery item:', error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-gallery/${id}`); // Navigate to edit page
  };

  const columns = useMemo(
    () => [
      { Header: 'Title', accessor: 'title' },
      { Header: 'Description', accessor: 'description' },
      {
        Header: 'Image',
        accessor: 'imageUrl',
        Cell: ({ value }) => <img src={`http://localhost:5000${value}`} alt={value} width={50} />,
      },
      {
        Header: 'Actions',
        accessor: 'id',
        Cell: ({ value }) => (
          <>
            <button onClick={() => handleEdit(value)} className="edit-button">Edit</button>
            <button onClick={() => handleDelete(value)} className="delete-button">Delete</button>
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
        <h1>Gallery Table</h1>
        <div className="upload-button-container">
          <button onClick={() => navigate('/UploadGallery')} className="upload-button">
            Upload Gallery
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

export default DaftarGallery;
