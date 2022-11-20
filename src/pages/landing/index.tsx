import { Box } from "@mui/material";
import React, { Suspense, lazy } from "react";

import { Layout } from "../../components/Layout";
import { BannerSection } from "../../sections/Banner";

const AprendizadoSection = lazy(() =>
  import("../../sections/Aprendizado/").then((module) => ({
    default: module.AprendizadoSection,
  }))
);

const BeneficiosSection = lazy(() =>
  import("../../sections/Beneficios").then((module) => ({
    default: module.BeneficiosSection,
  }))
);

const DepoimentosSection = lazy(() =>
  import("../../sections/Depoimentos").then((module) => ({
    default: module.DepoimentosSection,
  }))
);

const DuvidasSection = lazy(() =>
  import("../../sections/Duvidas").then((module) => ({
    default: module.DuvidasSection,
  }))
);

const SensacaoSection = lazy(() =>
  import("../../sections/Sensacao").then((module) => ({
    default: module.SensacaoSection,
  }))
);

export function Landing() {
  return (
    <Layout>
      <BannerSection />
      <Suspense
        fallback={<Box width="100%" height="100%" bgcolor="black.main" />}
      >
        <SensacaoSection />
        <AprendizadoSection />
        <DepoimentosSection />
        <BeneficiosSection />
        <DuvidasSection />
      </Suspense>
    </Layout>
  );
}
