import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel, faBalanceScale, faUsers, faHome } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Services.css';

const BeritaCard = ({ icon, title, description, link, delay, isImage }) => (
  <div className={`col-xl-3 col-md-6 d-flex align-items-stretch mt-4 ${delay ? `mt-xl-0` : ''}`} data-aos="zoom-in" data-aos-delay={delay}>
    <div className="icon-box">
      <div className="icon" style={{ color: '#002366', fontSize: '50px' }}>
        {isImage ? <img src={icon} alt={title} style={{ width: '250px', height: '250px' }} /> : <FontAwesomeIcon icon={icon} />}
      </div>
      <h4><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></h4>
      <p>{description}</p>
    </div>
  </div>
);

function Berita() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }, []);

  const Berita = [
    {
      icon: "https://kabarone.com/wp-content/uploads/2021/02/IMG-20210219-WA0050.jpg",
      title: "DPC Ikadin Demak : Dugaan Penganiayaan Terhadap Sugiono Adalah Penghinaan Profesi",
      description: "DEMAK,kabarone.com- Dugaan penganiayaan oleh puluhan oknum satpol PP kota Semarang terhadap seorang pengacara Sugiono, SE,SH. MH dari Kantor Sugiono dan Rekan menuai reaksi keras dari organisasi provesi Ikatan Advokat Indonesia (Ikadin) Demak.",
      link: "https://kabarone.com/2021/02/19/dpc-ikadin-demak-dugaan-penganiayaan-terhadap-sugiono-adalah-penghinaan-profesi/",
      delay: "100",
      isImage: true
    },
    {
        icon: "https://indonesianpolicenews.id/data/uploads/2021/10/IMG-20211018-WA0021.jpg",
        title: "Rokhim Siap Mencalonkan Diri sebagai Ketua DPC Ikadin Demak",
        description: "DEMAK (iPOLICENews) – Abdul Rokhim yang kerap disapa pengacara muda, beda, nekad dan berbahaya ini akhirnya mantap mendeklarasikan diri untuk maju sebagai Ketua DPC Ikadin Kabupaten Demak periode 2021 – 2024.",
        link: "https://kabarone.com/2021/02/19/dpc-ikadin-demak-dugaan-penganiayaan-terhadap-sugiono-adalah-penghinaan-profesi/",
        delay: "200",
        isImage: true
      },
      {
        icon: "https://asset-2.tstatic.net/jateng/foto/bank/images/palu-pengadilan.jpg",
        title: "LBH Demak Raya Siap Bantu Masyarakat Miskin Pencari Keadilan Secara Gratis",
        description: "TRIBUNJATENG.COM, DEMAK - LBH Demak Raya memberikan pendampingan hukum secara gratis bagi warga miskin.Hal itu disampaikan oleh Sekretaris LBH Demak, Abdul Rokhim kepada tribunjateng pada Selasa (15/1/2019).",
        link: "https://jateng.tribunnews.com/2019/01/15/lbh-demak-raya-siap-bantu-masyarakat-miskin-pencari-keadilan-secara-gratis",
        delay: "300",
        isImage: true
      },
      {
        icon: "https://asset-2.tstatic.net/jateng/foto/bank/images/lbh-demak-raya_20180112_192131.jpg",
        title: "Warga Kurang Mampu akan Dapatkan Pendampingan Hukum Gratis dari LBH Demak ",
        description: "TRIBUNJATENG.COM, DEMAK - LBH Demak Raya memberikan pendampingan hukum secara gratis bagi warga miskin.Hal itu disampaikan oleh Sekretaris LBH Demak, Abdul Rokhim kepada tribunjateng pada Selasa (15/1/2019).",
        link: "https://jateng.tribunnews.com/2018/01/12/warga-kurang-mampu-akan-dapatkan-pendampingan-hukum-gratis-dari-lbh-demak",
        delay: "400",
        isImage: true
      },
      {
        icon: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEglWtoFGa1xxpa58g_XjqmoW_7TqVAKQk_IiFnAbrhIUaXzvpqt3POFDoT-TsW7FpESxYanMyRIJMRg7bXysc96rP1JSF4fSG-7137IweLhHOj1mEHWa1XpXciMXpzNyffYCXeYwJphipE/s1600/IMG-20190514-WA0059.jpg",
        title: "Menuntut Keadilan, PKL Adem Ayem Demak Unjuk Rasa Menuntut Hak Ekonomi.",
        description: "Sementara itu, Abdul Rokhim Sekretaris LBH Demak Raya yang dalam hal ini ikut turun ke lapangan manyampaikan bahwa, lembaganya siap menerima kuasa dari para pedagang untuk melakukan Judicial Review perda tersebut.",
        link: "https://www.kabar14.com/2019/05/menuntut-keadilan-pkl-adem-ayem-demak.html?m=1",
        delay: "500",
        isImage: true
      },
      {
        icon: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivcAPBcL4597CC33fO329HSN_vA7-I9cHRX5Mgyp10t6BZwaFZh-_kzGP4JEHpBoGuh4Bzk85rEjEBS8d-Cws19Z3G6v32lWUzsQLaCcALiJgUAY3TQpL_DhCGV0xy_J4qQeIAID7LUDH0/s1600/IMG20180702133330.jpg",
        title: "Tidak ada kejelasan mengenai hak haknya yang dirampas oleh oknum anggota DPRD Demak, Warga Sayung Mengadu ke LBH Demak Raya.",
        description: "Demak - Merasa ditipu oleh oknum anggota DPRD Kabupaten Demak, Anwar Sadad (32) warga Desa Sriwulan , Kecamatan Sayung,  Demak mengadukan ke LBH Demak Raya.",
        link: "https://www.kabar14.com/2018/07/tidak-ada-kejelasan-mengenai-hak-haknya.html?m=1",
        delay: "600",
        isImage: true
      },
      {
        icon: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6Z9viV4Tj7Kzv2ojcZKqtMoza2Kqd-MKOF0ifJ0H6mLqM05WQJhyksl1gI2FiMGe0dbFC6A-Z12Z5oe9ca000yxQG7rDaemKEOhjSTCIWUdAXxpV5tyk8h8kmLCCKoCM94CS5UnE1Grfz/s1600/IMG-20181016-WA0015.jpg",
        title: "Menangkan Gugatan Pilperandes, Warga Minta Kades Jatimulyo Patuhi Putusan PTUN",
        description: "Sidang perkara pilperades Desa Jatimulyo nomor 83/G/PTUN.SMG/2018, 84/G/PTUN.SMG/2018 dan 85/G/PTUN/2018 Desa Jatimulyo Kecamatan Bonang Kabupaten Demak tahun 2018 antara Shofwan Santiko dkk melawan Lurah Jatimulyo dalam hal ini Ahmad Zamroni akhirnya sampai kepada tahap putusan pada Pengadilan Tata Usaha Negara Semarang pada hari Rabu tanggal 16 Oktober 2018 adapun amar putusan Majelis Hakim yang di pimpin Irna, S. H., M. H ini adalah: Mengabulkan gugatan PARA PENGGUGAT untuk seluruhnya, menyatakan batal keputusan kepala desa Jatimmulyo, Memerintahkan TERGUGAT untuk mencabut keputusan Pejabat Tata Usaha Negara, dan menghukum Tergugat untuk membayar beaya perkara yang timbul dari perkara ini.",
        link: "https://www.kabar14.com/2018/10/warga-minta-kades-jatimulyo-patuhi-putusan-ptun.html?m=1",
        delay: "700",
        isImage: true
      },
      {
        icon: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWBrQq5NLThCcoeLwetvPR5pPsFKoV3OWN37Li6ZyMBUFZnfCIOfesaIx0LjrhMbdHNBqiCrHSX2iO61Ys5J9L7v8Cgemxt0Gm8ejbjP7F5xXy4w6Sxn_lR7rm9z9_C43EOIgjk8k_oGg/s1280/IMG-20210204-WA0042.jpg",
        title: "SEKDA DEMAK DIGUGAT WARGA DESA JLEPER MIJEN PERIHAL SENGKETA INFORMASI PUBLIK",
        description: "KABAR14 (Demak-Mijen)  Kuasa hukum warga  penggugat, Maruson SH, dari kantor Hukum dan Pengacara R.I.M dan Partner Law Firm, mengatakan bahwa kliennya Ainun Najib,  telah memasukkan surat permohonan informasi pada tanggal 8 September 2020  terkait SK pelantikan/ pemilihan Abd. Farid Ma’ruf Subur Rahayu sebagai Perangkat Desa dalam jabatan Sekretaris Desa Jleper, namun tidak pernah di tanggapi oleh PPID Kab. Demak.",
        link: "https://www.kabar14.com/2019/05/menuntut-keadilan-pkl-adem-ayem-demak.html?m=1",
        delay: "800",
        isImage: true
      }
      ,
      {
        icon: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeh85x8q5Ij6YIUeOsxpphlD2JQQtxtn1_cS3ejI2hbPcjrSc9_Q0YN5h6IuAkFKvkXduCgraJHTgDqnJRUE_d4dmpDWxmgCJ8waQ1C3sJc1nSo6_yPkhCubZXerhzcjdl7j4yBR2F6sCO/s400/FB_IMG_1527678968897.jpg",
        title: "Merespon kegelisahan pekerja tentang THR, LBH Demak Raya buka posko pengaduan THR tahun 2018",
        description: "THR (Tunjangan Hari Raya) selalu menjadi permasalahan klasik yang dihadapi buruh ketika menjelang Hari Raya Idul fitri setiap tahunnya, permasalahan itu terjadi ketika perusahaan tidak memberikan hak normatif buruh berupa pemberian THR.",
        link: "https://www.kabar14.com/2018/05/merespon-kegelisahan-pekerja-tentang.html?m=1",
        delay: "900",
        isImage: true
      }
      ,
      {
        icon: "https://asset-2.tstatic.net/jateng/foto/bank/images/advokat-abdul-rokhim.jpg",
        title: "Abdul Rokhim Pengacara Muda Calonkan Diri Kandidat Ketua DPC Ikadin Demak ",
        description: "TRIBUNJATENG.COM, SEMARANG - Pengacara muda, Abdul Rokhim, bertekad mewakafkan dirinya untuk kemajuan DPC Ikatan Advokat Indonesia (Ikadin) Kabupaten Demak periode 2021-2024.",
        link: "https://jateng.tribunnews.com/2021/10/18/abdul-rokhim-pengacara-muda-calonkan-diri-kandidat-ketua-dpc-ikadin-demak",
        delay: "1000",
        isImage: true
      }
    // ... tambahkan berita lainnya di sini jika diperlukan
  ];

  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Berita</h2>
        </div>
        <div className="row">
          {Berita.map((service, index) => (
            <BeritaCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Berita;
