import React from "react";
import { Box, CssBaseline, Container } from "@mui/material";
import Header from "./components/Header";
import RightNavigation from "./components/Header/components/RightNavigation";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import PageHeader from "./components/PageHeader";
import {LayoutProps} from '../../types/ILayout';

const Layout: React.FC<LayoutProps> = ({
    children,
    headerData,
    sidebarData,
    pageheaderData,
}: LayoutProps) => {
    return (
        <Box sx={{ display: "flex", minHeight: "100vh", position: 'relative' }}>
            <CssBaseline />
            <Sidebar data={sidebarData} />
            <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", overflowY: "auto", position: 'relative' }}>
                <Header
                    RightNavigation={<RightNavigation />}
                    userMenuData={headerData.userMenuData}
                    title={headerData.title}
                    logo={headerData.logo}
                />
                <PageHeader
                    title={pageheaderData.title}
                    secondaryTitle={pageheaderData.secondaryTitle}
                    infoText={pageheaderData.infoText}
                    infoSecondaryText={pageheaderData.infoSecondaryText}
                    breadcrumbs={pageheaderData.breadcrumbs}
                    breadcrumbsHandler={pageheaderData.breadcrumbsHandler}
                />
                <Box component="main" sx={{ flexGrow: 1, mb: 4 }}>
                    <Container maxWidth={false}>{children}</Container>
                </Box>
                <Footer />
            </Box>
        </Box>
    );
};

export default Layout;
