import { useLocation } from "react-router-dom";
import { Flex } from "~/core/layout";
import { ROUTER_PATH } from "~/core/router";
import {
  NavGroup,
  NavItem,
  NavItemProps,
  Sidebar,
  SidebarSection,
} from "~/core/sidebar";

export const LayoutSidebar = () => {
  return (
    <Sidebar minWidth={40} padding={5}>
      <SidebarSection>
        <NavGroup>
          <Flex direction="column" gap={3}>
            <LayoutNavItem href={ROUTER_PATH.HOME}>Home</LayoutNavItem>
            <LayoutNavItem href={ROUTER_PATH.DATA_TABLE_TEST}>
              Data Table Test
            </LayoutNavItem>
          </Flex>
        </NavGroup>
      </SidebarSection>
    </Sidebar>
  );
};

const LayoutNavItem = ({ href, children }: NavItemProps) => {
  const { pathname } = useLocation();

  return (
    <NavItem
      bgColor={pathname === href ? "gray.100" : "transparent"}
      borderRadius={5}
      display="inline-flex"
      href={href}
      paddingX={5}
      paddingY={2}
      width="full"
    >
      {children}
    </NavItem>
  );
};
