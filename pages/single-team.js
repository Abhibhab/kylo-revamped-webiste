import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import TeamDetails from "../components/TeamDetails";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";

const TeamPage = () => {
  return (
    <Layout pageTitle="KYLO APPS | Transforming Businesses Through Technology">
      <PageHeader title="Team Details" crumbTitle="Team Details" />
      <Header
        heroLogo="/assets/images/logo/kylo-image.png"
        headerClass="header__white"
        menuClass="main-menu-3"
      />
      <main>
        <TeamDetails />
        <LetsWork />
      </main>
      <Footer />
    </Layout>
  );
};

export default TeamPage;
