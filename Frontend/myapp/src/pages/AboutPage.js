import React from 'react'
import "../Styles/about.css";

const AboutPage = () => {
    function showContent(id) {
        // Hide all content containers
        var contentContainers = document.querySelectorAll('.content-container');
        contentContainers.forEach(function (container) {
            container.classList.remove('active');
        });

        // Show the selected content container
        var selectedContainer = document.getElementById(id);
        selectedContainer.classList.add('active');
    }
    return (
        <>
            <div className='about_container'>
                <header>
                    <h1>About Us</h1>
                </header>
                <div className="container">
                    <div className="buttons-container">
                        <button className="button" onClick={() => showContent('Overview')}>Overview</button>
                        <button className="button" onClick={() => showContent('History')}>History</button>
                        <button className="button" onClick={() => showContent('Staff')}>Staff</button>
                    </div>
                    <div id="Overview" className="content-container active">
                        <h2>Overview</h2>
                        <p>Karmaveer Bhaurao Patil School-Sion Salesians has a rich history that traces back to its inception on May
                            16, 1928. Originally managed by the Salesians, the school was initially located in a rented building
                            named "Tardeo Castle." The management takeover marked a significant shift in staff and administration,
                            with the new school year in 1928 seeing a complete change in personnel.
                            Under the leadership of Fr. Joseph Hauber, Fr. Austin Oehlert, Bro. William Haughey, and Bro. Michael
                            Devalle, the school underwent transformations. In June 1930, the institution changed its name to Don
                            Bosco High School, and in 1932, Fr. Adolf Tornquist succeeded Fr. Hauber as the Rector.
                            In 1937, Rev. Fr. Aurelius Maschio took charge as the Superior and initiated plans to secure a spacious
                            plot in Matunga. Through fundraising efforts and approvals from the Superior Council, the school
                            acquired a plot, and by September 1940, it shifted from Tardeo Castle to 'Hilltop' on Carmichael Road.
                            The focus then shifted to developing the Matunga site, and on March 19, 1941, the foundation stone for
                            the new building was blessed and laid.
                            By October 31, 1941, the school had moved into the partially completed building in Matunga. On January
                            31, 1942, the premises were officially inaugurated, marking the beginning of the secondary section of
                            Don Bosco, Matunga. The primary section building's foundation stone was blessed and laid on January 31,
                            1950, and completed in time for the new school year in June 1951.
                            During the Rectorship of Fr. M. CasaroUi (1952-1958), the Shrine of Don Bosco’s Madonna was initiated
                            and completed by Fr. Maschio. Fr. Hubert Roasario succeeded him as the Rector and was later elected
                            Bishop of Dibrugarh. On November 28, 1958, during the consecration of the new Church, Bishop D’Rosario
                            consecrated eight beautiful altars of the Church and the Crypt.
                            In January 1965, under the leadership of Fr. John Giacomello and Rev. Fr. Ignatius Rubio, the present
                            boarding house was constructed. The school has continued to evolve and contribute to the education and
                            development of students, carrying forward the legacy established by its dedicated founders and leaders.
                        </p>
                    </div>
                    <div id="History" className="content-container">
                        <h2>History</h2>
                        <p>History of Karmaveer Bhaurao Patil School-Sion
                            SalesiansOn May 16, 1928, four Salesians – Fr. Joseph Hauber (the Rector), Fr. Austin Oehlert, Bro.
                            William Haughey and Bro. Michael Devalle took over the management of the Educational Institution of the
                            Immaculate Conception from Fr. J.S. Freitas S.J .. The school was housed in a rented building called
                            “Tardeo Castle”. When the new school year commenced on June 6, 1928, there was complete change of staff
                            and servants. On the rolls were one hundred and eight-nine day scholars and ninety-eight boarders. The
                            staff was composed of nine masters and four lady teachers. Mr Roch Thomas was the Head Master officially
                            from July 1, 1928. Two years later in June 1930, the institution changed its name to Don Bosco High
                            School. In 1932 Fr. Adolf Tornquist succeeded Fr. Hauber, staying in office until his departure for
                            Argentina in May 1936. The school then remained without a Rector for nine months.
                            DB shrine oldIn 1937, Rev. Fr. Aurelius Maschio was appointed Superior. Gifted with rare foresight,
                            dynamism and with penchant for materializing his plans, Fr. Aurelius made an assessment of the existing
                            situation, laid our his plans and launched out in a massive way to obtain funds. He found at Matunga a
                            spacious plot – a landscape of marsh, water filled pits and slimymud which he proposed to buy. In the
                            meanwhile Rev. Frs. Beruruli and Candela of the Superior Council, during their brief stop in Bombay on
                            their way back to Turin from the Far East, visited the proposed Matunga plot and gave their approval for
                            its purchase.
                            With notice to quit Tardeo Castle by October 1, 1940 the entire school was shifted to a place called
                            ‘Hilltop’ on Carmichael Road at Cumbala Hill by the end of September 1940. In the meanwhile all
                            attention was focused upon the new place bought at Matunga for a future Don Bosco Institution. And so it
                            came to pass that March 19, 1941, the foundation stone of the new building in Matunga was blessed and
                            laid by Archbishop Thomas Roberts S.J.
                            By October 31, 1941, ” Hilltop” was vacated and the school moved into the partially completed building.
                            On January 31 st, 1942, the premises were completed and solemnly inaugurated. It remains today as the
                            secondary section of Don Bosco, Matunga.
                            The foundation stone of the primary section building was blessed and laid on the feast of Don Bosco
                            January 31, 1950. The building was completed in time for the new school year of June 1951.
                            During the Rectorship of Fr. M. CasaroUi (1952-1958), the Shrine of Don Bosco’s Madonna was started and
                            completed by Fr. Maschio. Fr. Hubert Roasario became the next Rector. He was elected Bishop of Dibrugarh
                            at the end of his term. On November 28, 1958, during the sacred function of the consecration of the new
                            Church, Bishop D’Rosario with seven other bishops also consecrated the eight beautiful altars of the
                            Church and the Crypt.
                            In January, 1965 Fr. John Giacomello, Rector and Rev. Fr. Ignatius Rubio, Administrator, built what is
                            the preset boarding house..</p>
                    </div>
                    <div id="Staff" className="content-container">
                        <h2>Staff</h2>
                        <p>Principal<br />
                            laxman sir<br />
                            office boy<br />
                            Saavli kaamgar<br />
                            office boy<br />
                            Rohit bhai
                        </p></div>
                </div>
            </div>


        </>
    )
}

export default AboutPage