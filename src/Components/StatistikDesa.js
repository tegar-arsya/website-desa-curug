import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import axios from 'axios';
import { FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaHeart, FaPrayingHands, FaUsers, FaMale, FaFemale, FaUserFriends } from 'react-icons/fa';
import '../assets/css/StatistikDesa.css';

const StatistikDesa = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [statistics, setStatistics] = useState({
    regions: [],
    jobs: [],
    educationLevels: [],
    population: {},
    maritalStatuses: [],
    religions: [],
    voters: []
  });

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/statistics/statistics');
        setStatistics(response.data);
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };

    fetchStatistics();
  }, []);

  const data = activeItem ? statistics[activeItem] || [] : [];

  const columns = React.useMemo(() => {
    if (activeItem === 'regions') {
      return [
        { Header: 'Wilayah', accessor: 'name' },
        { Header: 'Populasi', accessor: 'population' },
      ];
    }
    if (activeItem === 'jobs') {
      return [
        { Header: 'Pekerjaan', accessor: 'job_title' },
        { Header: 'Jumlah', accessor: 'count' },
      ];
    }
    if (activeItem === 'educationLevels') {
      return [
        { Header: 'Pendidikan', accessor: 'education_level' },
        { Header: 'Jumlah', accessor: 'count' },
      ];
    }
    if (activeItem === 'maritalStatuses') {
      return [
        { Header: 'Status', accessor: 'status' },
        { Header: 'Jumlah', accessor: 'count' },
      ];
    }
    if (activeItem === 'religions') {
      return [
        { Header: 'Agama', accessor: 'religion_name' },
        { Header: 'Jumlah', accessor: 'count' },
      ];
    }
    if (activeItem === 'voters') {
      return [
        { Header: 'Nama', accessor: 'name' },
        { Header: 'Status', accessor: 'status' },
      ];
    }
    return [];
  }, [activeItem]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <div className="statistik-container" style={{ marginTop: '100px' }}>
      <h2 className="statistik-title">STATISTIK DESA</h2>
      <div className="statistik-content">
        <div className="statistik-left">
          <StatistikItem 
            icon={<FaMapMarkerAlt />} 
            text="Data Berdasarkan Wilayah" 
            onClick={() => setActiveItem('regions')} 
          />
          <StatistikItem 
            icon={<FaBriefcase />} 
            text="Data Berdasarkan Pekerjaan" 
            onClick={() => setActiveItem('jobs')} 
          />
          <StatistikItem 
            icon={<FaGraduationCap />} 
            text="Data Statistik Pendidikan Ditempuh" 
            onClick={() => setActiveItem('educationLevels')} 
          />
        </div>
        <div className="statistik-center">
          <div className="statistik-populasi">
            <div className="populasi-icon">
              <FaUserFriends size={50} />
            </div>
            <div className="populasi-title">POPULASI</div>
            <div className="populasi-number">{statistics.population.total_population || 0}</div>
            <div className="populasi-gender">
              <div className="gender-item">
                <FaMale className="gender-icon" />
                <span>{statistics.population.male_population || 0} LAKI-LAKI</span>
              </div>
              <div className="gender-item">
                <FaFemale className="gender-icon" />
                <span>{statistics.population.female_population || 0} PEREMPUAN</span>
              </div>
            </div>
          </div>
        </div>
        <div className="statistik-right">
          <StatistikItem 
            icon={<FaHeart />} 
            text="Data Statistik Status Perkawinan" 
            onClick={() => setActiveItem('maritalStatuses')} 
          />
          <StatistikItem 
            icon={<FaPrayingHands />} 
            text="Data Statistik Berdasarkan Agama" 
            onClick={() => setActiveItem('religions')} 
          />
          <StatistikItem 
            icon={<FaUsers />} 
            text="Daftar Pemilih Tetap" 
            onClick={() => setActiveItem('voters')} 
          />
        </div>
      </div>
      {activeItem && (
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
  );
};

const StatistikItem = ({ icon, text, onClick }) => (
  <div className="statistik-item" onClick={onClick}>
    <div className="statistik-icon">{icon}</div>
    <div className="statistik-text">{text}</div>
  </div>
);

export default StatistikDesa;