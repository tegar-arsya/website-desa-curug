import React from 'react';
import '../assets/css/RekapanData.css';
const RekapanItem = ({ title, data }) => (
  <div className="rekapan-item">
    {data.map((item, index) => {
      const percentage = (item.realisasi / item.anggaran) * 100;
      return (
        <div key={index} className="rekapan-row">
          <div className="rekapan-header">
            <span>{item.label}</span>
          </div>
          <div className="rekapan-body">
            <div className="rekapan-values">
              <div className="rekapan-value">
                <span>Anggaran</span>
                <span>{`Rp ${item.anggaran.toLocaleString()}`}</span>
              </div>
              <div className="rekapan-value">
                <span>Realisasi</span>
                <span>{`Rp ${item.realisasi.toLocaleString()}`}</span>
              </div>
            </div>
            <div className="progress" style={{ '--progress-width': `${percentage}%` }}>
              <div className="progress-bar">
                <span>{percentage.toFixed(2)}%</span>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);


function RekapanData() {
  const dataRekapan = [
    {
      title: "APBDes 2024 Pelaksanaan",
      data: [
        { label: "Pendapatan", anggaran: 1435552063, realisasi: 632770274 },
        { label: "Belanja", anggaran: 1536180260, realisasi: 409587093 },
        { label: "Pembiayaan", anggaran: 100628197, realisasi: 100628197 }
      ]
    },
    {
      title: "APBDes 2024 Pendapatan",
      data: [
        { label: "Hasil Usaha Desa", anggaran: 5000000, realisasi: 1700000 },
        { label: "Hasil Aset Desa", anggaran: 906956000, realisasi: 21480250 },
        { label: "Dana Desa", anggaran: 814976000, realisasi: 405210400 },
        { label: "Bagi Hasil Pajak Dan Retribusi", anggaran: 39119653, realisasi: 0 },
        { label: "Alokasi Dana Desa", anggaran: 309260810, realisasi: 153610800 },
        { label: "Bantuan Keuangan Provinsi", anggaran: 75000000, realisasi: 0 },
        { label: "Bantuan Keuangan Kabupaten/Kota", anggaran: 100000000, realisasi: 50000000 }
      ]
    },
    {
      title: "APBDes 2024 Pembelanjaan",
      data: [
        { label: "Bidang Penyelenggaraan Pemerintahan Desa", anggaran: 516439736, realisasi: 166841493 },
        { label: "Bidang Pelaksanaan Pembangunan Desa", anggaran: 665210000, realisasi: 167190600 },
        { label: "Bidang Pembinaan Kemasyarakatan", anggaran: 103100000, realisasi: 23255000 },
        { label: "Bidang Pemberdayaan Masyarakat", anggaran: 142024000, realisasi: 9800000 },
        { label: "Bidang Penanggulangan Bencana, Darurat Dan Mendesak Desa", anggaran: 109406524, realisasi: 42500000 }
      ]
    }
  ];

  return (
    <div>
      <section id="RekapanData" className="rekapan">
        <div className="container" data-aos="fade-up" style={{ marginTop: '100px' }}>
          <h1 className="rekapan-title">Anggaran Tahun 2024</h1>
          {dataRekapan.map((section, index) => (
            <div key={index} className="rekapan-section">
              <h2>{section.title}</h2>
              {section.data.map((item, index) => (
                <RekapanItem key={index} title={item.label} data={[item]} />
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default RekapanData;
