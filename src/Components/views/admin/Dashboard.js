import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../../Sidebar';
import '../../../assets/css/Dashboard.css';
import { useTable } from 'react-table';

const Dashboard = () => {
  const navigate = useNavigate();
  const [galleryCount, setGalleryCount] = useState(0);
  const [newsCount, setNewsCount] = useState(0);
  const [summary, setSummary] = useState({});
  const [activeItem, setActiveItem] = useState(null);
  const [dataType, setDataType] = useState('');

  useEffect(() => {
    // Check if the token exists in localStorage
    const token = localStorage.getItem('token');

    if (!token) {
      // If no token is found, redirect to the login page
      navigate('/login');
    }

    // Fetch data from APIs
    const fetchData = async () => {
      try {
        // Gallery count
        const galleryResponse = await axios.get('https://apicurug.tegararsyadani.my.id/api/gallery/postsGallery');
        setGalleryCount(galleryResponse.data.length);

        // News count
        const newsResponse = await axios.get('https://apicurug.tegararsyadani.my.id/api/perangkat/postsPerangkat');
        setNewsCount(newsResponse.data.length);

        // Summary data
        const summaryResponse = await axios.get('https://apicurug.tegararsyadani.my.id/api/statistics/statistics');
        setSummary(summaryResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [navigate]);

  const getTableData = () => {
    if (dataType === 'regions') {
      return summary.regions || [];
    }
    if (dataType === 'jobs') {
      return summary.jobs || [];
    }
    if (dataType === 'educationLevels') {
      return summary.educationLevels || [];
    }
    if (dataType === 'maritalStatuses') {
      return summary.maritalStatuses || [];
    }
    if (dataType === 'religions') {
      return summary.religions || [];
    }
    if (dataType === 'voters') {
      return summary.voters || [];
    }
    return [];
  };

  const columns = React.useMemo(() => {
    if (dataType === 'regions') {
      return [
        { Header: 'Wilayah', accessor: 'name' },
        { Header: 'Populasi', accessor: 'population' },
      ];
    }
    if (dataType === 'jobs') {
      return [
        { Header: 'Pekerjaan', accessor: 'job_title' },
        { Header: 'Jumlah', accessor: 'count' },
      ];
    }
    if (dataType === 'educationLevels') {
      return [
        { Header: 'Pendidikan', accessor: 'education_level' },
        { Header: 'Jumlah', accessor: 'count' },
      ];
    }
    if (dataType === 'maritalStatuses') {
      return [
        { Header: 'Status', accessor: 'status' },
        { Header: 'Jumlah', accessor: 'count' },
      ];
    }
    if (dataType === 'religions') {
      return [
        { Header: 'Agama', accessor: 'religion_name' },
        { Header: 'Jumlah', accessor: 'count' },
      ];
    }
    if (dataType === 'voters') {
      return [
        { Header: 'Nama', accessor: 'name' },
        { Header: 'Status', accessor: 'status' },
      ];
    }
    return [];
  }, [dataType]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: getTableData() });

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Dashboard</h1>
        <p>Welcome to the Dashboard!</p>
        <div className="card-container">
          <div className="card">
            <h2>Gallery</h2>
            <p>Total Items: {galleryCount}</p>
            <p>View and manage your gallery items.</p>
          </div>
          <div className="card">
            <h2>News</h2>
            <p>Total Items: {newsCount}</p>
            <p>View and manage the latest news updates.</p>
          </div>
          <div className="card" onClick={() => setActiveItem('summary')}>
            <h2>Data Summary</h2>
            <p>Click to view detailed data.</p>
          </div>
        </div>

        {activeItem === 'summary' && (
          <div className="summary-options">
            <h2>Select Data Type</h2>
            <select onChange={(e) => setDataType(e.target.value)} value={dataType}>
              <option value="">Select...</option>
              <option value="regions">Regions</option>
              <option value="jobs">Jobs</option>
              <option value="educationLevels">Education Levels</option>
              <option value="maritalStatuses">Marital Statuses</option>
              <option value="religions">Religions</option>
              <option value="voters">Voters</option>
            </select>
          </div>
        )}

        {dataType && (
          <div className="statistik-detail">
            <table {...getTableProps()} className="statistik-table">
              <thead>
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map(cell => (
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
