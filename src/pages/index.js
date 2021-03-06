import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function Feature({ icon, title, description }) {
  // const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {/* {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )} */}
      <img className="primary-icon" src={icon}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const FeatureSection = (props) => {
  return (
    <div className={clsx("row", styles.featureRow)}>
      <div className="col col--6">
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
      <div className="col col--6">
        <img
          className="feature-img"
          src={useBaseUrl(props.image)}
          alt={props.title}
        />
      </div>
    </div>
  );
};

const features = [
  {
    title: <>Open Source</>,
    icon: "img/github.svg",
    description: <>Kalm is free, open source, and actively maintained. </>,
  },
  {
    title: "Get Running Quickly",
    icon: "img/build-24px.svg",
    description: (
      <>
        Kalm simplifies the common workflows related to Kubernetes, including
        deploying applications, routing, and integrating with your existing
        pipeline.
      </>
    ),
  },
  {
    title: <>Works With Any Kubernetes Cluster</>,
    icon: "img/install.svg",
    description: (
      <>
        Kalm works on Google GKE, Amazon EKS, Azure AKS, and most Kubernetes
        configurations. Take it with you if you decide to migrate someday.
      </>
    ),
  },
];

var divStyle = {
  padding: "12px 0px 0px 0px"
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">
            Easily deploy and manage applications on Kubernetes
          </h1>
          <p className="hero__subtitle">
            Get what you want out of Kubernetes without having to write and
            maintain a ton of custom tooling. Deploy apps, handle requests, and
            hook up CI/CD, all through an intuitive web interface.
          </p>
          
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Try it now
            </Link>
            

          </div>
          <div style={divStyle}>
            <iframe src="https://ghbtns.com/github-btn.html?user=kalmhq&repo=kalm&type=star&count=true&size=large" 
                frameborder="0" width="128" height="30" title="GitHub"></iframe>
            </div>

        </div>
      </header>

      <div className="container">
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="div">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}

      <div className={clsx("row", styles.featureRow)}>
        <div className="col col--6">
          <h3>Create and Manage Applications</h3>
          <p>Kalm provides an intuitive web interface for core Kubernetes 
            functionalities:
          </p>
          <ul>
            <li>Configuring and deploying applications</li>
            <li>Managing ports and container networking</li>
            <li>Probes and Auto-Healing</li>
            <li>Scaling</li>
            <li>Mounting Volumes</li>
            <li>Scheduling according to Resources</li>
          </ul>
        </div>
        <div className="col col--6">
          <iframe width="538" height="303" src="https://www.youtube.com/embed/F5wuQaPQ50s"
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen=""></iframe>
        </div>
      </div>

        <FeatureSection
          title="Powerful Ingress"
          desc={
            <>
              Kalm supports the Service Mesh{" "}
              <Link to="https://istio.io/">Istio</Link> out of the box. This
              gives you full control over traffic entering the cluster. You can
              setup Request Routing, Error Injection, Mirroring, Traffic
              Shifting, and more.
            </>
          }
          image="img/feature-routes.png"
        />
        <FeatureSection
          desc={
            <>
              Want the Heroku-like experience of "git push, update app"? Kalm
              provides webhooks which you can use to invoke deployment updates.
              In addition, you can generate snippets for popular build tools.
            </>
          }
          title="CI/CD Integration"
          image="img/feature-cicd.png"
        />
        <FeatureSection
          title="Automatic HTTPS Certification"
          desc={
            <>
              Easily obtain and renew HTTPS Certificates via{" "}
              <Link to="https://letsencrypt.org/">Let's Encrypt</Link>. Kalm
              currently supports specific domain name certificates using http-01
              challenge. (Wildcard certificates coming soon)
            </>
          }
          image="img/feature-cert.png"
        />
        <FeatureSection
          title="Log Collection"
          desc={
            <p>
              New to Kubernetes and struggling with log collection? Kalm can
              help you setup a logging solution within minutes. Choose either{" "}
              <a href="https://grafana.com/oss/loki/" target="_blank">
                Loki(PLG stack){" "}
              </a>
              or{" "}
              <a
                href="https://www.elastic.co/what-is/elk-stack"
                target="_blank"
              >
                ELK
              </a>
              .
            </p>
          }
          image="img/feature-logs.png"
        />
        <FeatureSection
          title="Works With Any Kubernetes Cluster"
          desc={
            <>
              Kalm abides by Kubernetes standards and tries to avoid platform
              specific dependencies. Kalm has been tested on:
              <p></p>
              <ul>
                <li>Amazon EKS</li>
                <li>Google GKE</li>
                <li>Azure AKS</li>
                <li>Digital Ocean Kubernetes</li>
                <li>Linode Kubernetes Engine</li>
                <li>k3s raspberry pi</li>
                <li>Minikube</li>
              </ul>{" "}
            </>
          }
          image="img/feature-clusters.png"
        />

        <FeatureSection
          desc={
            <>
              Kalm utilizes <Link to="https://github.com/dexidp/dex">dex</Link>,
              which lets you use your existing team authentication system(i.e
              Github, Gitlab, Auth0) to control access to applications running
              on your Kubernetes cluster. Kalm supports RBAC mode and
              application-level access control.
            </>
          }
          title="Built-in Single Sign-On"
          image="img/feature-sso.png"
        />
      </div>
    </Layout>
  );
}

export default Home;
