import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import PortfolioDetails from "../components/PortfolioDetails";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";

const TeamPage = () => {
  return (
    <Layout pageTitle="KYLO APPS | Transforming Businesses Through Technology">
      <PageHeader title="Portfolio Details" crumbTitle="Portfolio Details" />
      <Header
        heroLogo="/assets/images/logo/kylo-image.png"
        headerClass="header__white"
        menuClass="main-menu-3"
      />
      <main>
        <PortfolioDetails />
        <LetsWork />
      </main>
      <Footer />
    </Layout>
  );
};

export default TeamPage;
