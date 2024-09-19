import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/css/Team.css';

function StukturOrganisasi() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false
        });

        // Fetch data from the API
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://apicurug.tegararsyadani.my.id/api/perangkat/postsPerangkat');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <section id="StukturOrganisasi" className="team section-organisasi">
            <div className="container" data-aos="fade-up" style={{ marginTop: '100px' }}>
                <div className="section-title">
                    <h2>Struktur Kepengurusan Desa Curug</h2>
                </div>

                <div className="row">
                    {posts.map((post, index) => (
                        <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay={100 * (index + 1)} key={index}>
                            <div className="member d-flex align-items-start">
                                <div className="pic">
                                    <img src={`https://apicurug.tegararsyadani.my.id${post.imageUrl}`} className="img-fluid" alt={post.title} />
                                </div>
                                <div className="member-info">
                                    <h4>{post.title}</h4>
                                    <span>{post.subtitle}</span>
                                    <p>{post.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default StukturOrganisasi;
