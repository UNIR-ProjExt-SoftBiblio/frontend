import React from 'react';

import Table from './../../components/components/table/Table';
import Upload from './../../components/components/upload/Upload';

import styles from './Home.module.css'

const Home = () => {
    return (
        <main className={styles.main}>
            <section className={styles.home}>
                <Table/>
                <Upload/>
            </section>
        </main>
    );
}
 
export default Home;