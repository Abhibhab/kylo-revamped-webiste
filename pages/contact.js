import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import Contact from "../components/Contact";
import ContactForm from "../components/ContactForm";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <Layout pageTitle=" KYLO APPS | Transforming businesses through">
      <PageHeader title="Contact Us" crumbTitle="Contact Us" />
      <Header
        heroLogo="/assets/images/logo/kylo-image.png"
        headerClass="header__white"
        menuClass="main-menu-3"
      />
      <main>
        <Contact />
        <ContactForm />
        {/* <LetsWork /> */}
      </main>
      <Footer />
    </Layout>
  );
};

export default ContactPage;
