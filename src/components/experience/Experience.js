import React from "react";
import "./Experience.css";

const Experience = () => {
    return (
        <section className="container" id="experience">
            <h1 className="experience-heading">
                Work <span>Experience</span>
            </h1>
            <div className="row justify-content-center">
                <div className="col-2">
                    <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button className="nav-link active" id="v-pills-belairdirect-tab" data-bs-toggle="pill" data-bs-target="#v-pills-belairdirect" type="button" role="tab" aria-controls="v-pills-belairdirect" aria-selected="true">belairdirect</button>
                        <button className="nav-link" id="v-pills-tdbank-tab" data-bs-toggle="pill" data-bs-target="#v-pills-tdbank" type="button" role="tab" aria-controls="v-pills-tdbank" aria-selected="false">TD Bank</button>
                        <button className="nav-link" id="v-pills-cgi-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cgi" type="button" role="tab" aria-controls="v-pills-cgi" aria-selected="false">CGI</button>
                        <button className="nav-link" id="v-pills-mun-research-tab" data-bs-toggle="pill" data-bs-target="#v-pills-mun-research" type="button" role="tab" aria-controls="v-pills-mun-research" aria-selected="false">Memorial University</button>
                        <button className="nav-link" id="v-pills-mun-support-tab" data-bs-toggle="pill" data-bs-target="#v-pills-mun-support" type="button" role="tab" aria-controls="v-pills-mun-support" aria-selected="false">Memorial University</button>
                    </div>
                </div>
                <div className="col-6">
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-belairdirect" role="tabpanel" aria-labelledby="v-pills-belairdirect-tab" tabIndex="0">
                            <h4>Licensed Insurance Agent @ belairdirect</h4>
                            <p>May. 2025 - Present</p>
                            <ul>
                                <li>Advise clients on appropriate coverage by assessing needs and generating new business quotes.</li>
                                <li>Build and manage a growing book of business while supporting customer retention.</li>
                                <li>Address client concerns with professionalism and provide timely, tailored solutions.</li>
                                <li>Maintain accurate, confidential records across multiple platforms in line with compliance standards.</li>
                                <li>Collaborate across departments to resolve issues, improve workflows, and support operational goals.</li>
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="v-pills-tdbank" role="tabpanel" aria-labelledby="v-pills-tdbank-tab" tabIndex="0">
                            <h4>Customer Experience Associate @ TD Bank</h4>
                            <p>Mar. 2022 - Apr. 2025</p>
                            <ul>
                                <li>Provided prompt customer service, efficiently resolving inquiries and issues.</li>
                                <li>Built and maintained strong client relationships by recommending tailored banking solutions.</li>
                                <li>Assisted with financial transactions, including account openings, deposits, withdrawals, and loan applications.</li>
                                <li>Consistently exceeded quarterly goals, excelling in referrals and customer satisfaction surveys.</li>
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="v-pills-cgi" role="tabpanel" aria-labelledby="v-pills-cgi-tab" tabIndex="0">
                            <h4>Digital Technology Transformation Consultant Co-op @ CGI</h4>
                            <p>Jan. 2024 - Aug. 2024</p>
                            <ul>
                                <li>Contributed to a $500,000 project, upgrading and maintaining trading platforms in the Capital Markets domain as part of the L1 Application Management Support team.</li>
                                <li>Managed client requests via ServiceNow, monitored application performance, and resolved issues promptly.</li>
                                <li>Generated reports using SQL, JIRA, and Power BI; tracked ticket resolution using Excel’s VLOOKUP and PivotTables.</li>
                                <li>Conducted daily health checks on cloud-hosted applications to ensure consistent performance.</li>
                                <li>Led knowledge transfer sessions and documented processes in Confluence to enhance team collaboration.</li>
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="v-pills-mun-research" role="tabpanel" aria-labelledby="v-pills-mun-research-tab" tabIndex="0">
                            <h4>Research Assistant - Department of Economics @ Memorial University of Newfoundland</h4>
                            <p>Aug. 2021 - May. 2022</p>
                            <ul>
                                <li>Performed background research on economic issues and topics, such as supply and demand, wealth distribution, employment, and trade.</li>
                                <li>Collected, recorded, and analyzed economic data from interviews, surveys, and public records.</li>
                                <li>Wrote, proofread, and edited economic reports, abstracts, and briefs for publication.</li>
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="v-pills-mun-support" role="tabpanel" aria-labelledby="v-pills-mun-support-tab" tabIndex="0">
                            <h4>Student Services Support Assistant @ CITL, Memorial University</h4>
                            <p>Aug. 2022 – Dec. 2022</p>
                            <ul>
                                <li>Processed assignments and mail using Banner Student and other software for online students.</li>
                                <li>Provided prompt and helpful support to students and faculty via phone, email, and in person.</li>
                                <li>Coordinated materials and distribution for exams and assignments at the distribution center.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
