import { PropsWithChildren } from "react";
import { Link, useLocation } from "react-router-dom";

import { Flex } from "~/core/layout";
import { ROUTER_PATH } from "~/core/router";
import { NavGroup, NavItem, Sidebar, SidebarSection } from "~/core/sidebar";

export const LayoutSidebar = () => {
  return (
    <Sidebar minWidth={40} padding={5}>
      <SidebarSection>
        <NavGroup>
          <Flex direction="column" gap={3}>
            <LayoutNavItem to={ROUTER_PATH.HOME}>Home</LayoutNavItem>
            <LayoutNavItem to={ROUTER_PATH.DATA_TABLE_TEST}>
              Data Table Test
            </LayoutNavItem>
            <LayoutNavItem to={ROUTER_PATH.I18N_TEST}>I18n Test</LayoutNavItem>
          </Flex>
        </NavGroup>
      </SidebarSection>
    </Sidebar>
  );
};

const LayoutNavItem = ({
  children,
  to,
}: PropsWithChildren & { to: string }) => {
  const { pathname } = useLocation();

  return (
    <Link to={to}>
      <NavItem
        bgColor={pathname === to ? "gray.100" : "transparent"}
        borderRadius={5}
        display="inline-flex"
        paddingX={5}
        paddingY={2}
        width="full"
      >
        {children}
      </NavItem>
    </Link>
  );
};
