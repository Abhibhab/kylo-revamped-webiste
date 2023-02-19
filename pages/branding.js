import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";
import Branding from "../components/Branding";

const ServicesDetailsPage = () => {
  return (
    <Layout pageTitle=" KYLO APPS | Transforming businesses through">
      <PageHeader title="Services Details" crumbTitle="Services Details" />
      <Header
        heroLogo="/assets/images/logo/kylo-image.png"
        headerClass="header__white"
        menuClass="main-menu-3"
      />
      <main>
        <Branding />
        <LetsWork />
      </main>
      <Footer />
    </Layout>
  );
};

export default ServicesDetailsPage;
