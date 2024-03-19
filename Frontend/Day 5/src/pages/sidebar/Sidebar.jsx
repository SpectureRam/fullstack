import { useState } from 'react';
import { Layout, Menu, Switch } from 'antd';
import Swal from 'sweetalert2';
import logo from "../../assets/untitled.png";
import UserAnalytics from "../../components/admin/Payments";
import UserDashboard from "../../components/admin/Dashboard";
import UserReports from "../../components/admin/Reports";
import UserSettings from "../../components/admin/Settings";
import UserTable from "../../components/admin/UserTable";
import { useNavigate } from 'react-router-dom';
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  LineChartOutlined
} from '@ant-design/icons';
import Analytics from '../../components/admin/Payments';
import Reports from '../../components/admin/Reports';
import Dashboard from '../../components/admin/Dashboard';
import Settings from '../../components/admin/Settings';

const { Sider, Content } = Layout;
const AdminSidebar = () => {
  const Navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [showUsers, setShowUsers] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [showReports, setShowReports] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure want to logout?",
      text: "You won't be able to come back!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I proceed to logout!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logged out!",
          text: "You have been logged out.",
          icon: "success"
        });
        window.location.reload();
      }
    });
  };

  const handleMenuClick = (menuItem) => {
    if (menuItem.key === '1') { 
      setShowDashboard(true);
      Navigate("/admin/dashboard");
    } else {
      setShowDashboard(false);
    }
    if (menuItem.key === '2') { 
      setShowUsers(true);
      Navigate("/admin/usertable");
    } else {
      setShowUsers(false);
    }
    if (menuItem.key === '3') { 
      setShowSettings(true);
      Navigate("/admin/settings");
    } else {
      setShowSettings(false);
    }
    if (menuItem.key === '7') { 
      setShowReports(true);
      Navigate("/admin/reports");
    } else {
      setShowReports(false);
    }
    if (menuItem.key === '8') { 
      setShowAnalytics(true);
      Navigate("/admin/payments");
    } else {
      setShowAnalytics(false);
    }
  };


  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed} theme={theme}>
      <div className="logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100px' }}>
          <img src={logo} alt="Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
        <Menu theme={theme} mode="inline" defaultSelectedKeys={['1']} onClick={handleMenuClick}>
          <Menu.Item key="1" icon={<DashboardOutlined />} onClick={toggleCollapsed}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Users
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
          <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="Recharges">
            <Menu.Item key="4">Mobile</Menu.Item>
            <Menu.Item key="5">DTH</Menu.Item>
            <Menu.Item key="6">Electricity</Menu.Item>
          </Menu.SubMenu>
          <Menu.Divider />
          <Menu.Item key="7" icon={<LineChartOutlined />}>
            Reports
          </Menu.Item>
          <Menu.Item key="8" icon={<SettingOutlined />}>
            Payments
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="9" onClick={handleLogout} icon={<LogoutOutlined />}>
            Logout
          </Menu.Item>
        </Menu>
        <div style={{ position: 'absolute', bottom: 70, left: '50%', transform: 'translateX(-50%)' }}>
          <Switch
            checked={theme === 'dark'}
            onChange={toggleTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
        </div>
      </Sider>
      <Layout className="site-layout">
        
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >

          {/*
          {showUsers && <UserTable />}
          {showAnalytics && <Analytics />}
          {showReports && <Reports />}
          {showDashboard && <Dashboard />}
          {showSettings  && <Settings />}
          */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminSidebar;
