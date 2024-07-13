import React, { useState } from 'react';
import { AppConfig, TabConfig, ChartConfig } from './config';
import { Home, BarChart2, Settings, Users, Calendar, Phone, FileText, CheckSquare, Mail } from 'lucide-react';

type CustomComponentProps = {
  config: AppConfig;
};

interface CustomComponents {
  [key: string]: React.FC<CustomComponentProps>;
}

interface CustomData {
  [key: string]: any;
}

// =============== CUSTOM COMPONENTS ===============
const PropertyManagementComponent: React.FC<CustomComponentProps> = ({ config }) => {
  const [properties, setProperties] = useState([
    { id: 1, name: 'Shopping Center A', status: 'Vacant', nextAction: 'Occupy', nextActionDate: '2023-09-15' },
    { id: 2, name: 'Office Building B', status: 'Occupied', nextAction: 'Vacate', nextActionDate: '2023-10-01' },
    { id: 3, name: 'Retail Space C', status: 'Vacant', nextAction: 'Occupy', nextActionDate: '2023-09-20' },
  ]);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Property Management</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Property</th>
            <th>Status</th>
            <th>Next Action</th>
            <th>Next Action Date</th>
          </tr>
        </thead>
        <tbody>
          {properties.map(property => (
            <tr key={property.id}>
              <td>{property.name}</td>
              <td>{property.status}</td>
              <td>{property.nextAction}</td>
              <td>{property.nextActionDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const InvoiceProcessingComponent: React.FC<CustomComponentProps> = ({ config }) => {
  const [invoices, setInvoices] = useState([
    { id: 1, property: 'Shopping Center A', amount: 5000, status: 'Pending', dueDate: '2023-09-30' },
    { id: 2, property: 'Office Building B', amount: 7500, status: 'Paid', dueDate: '2023-09-15' },
    { id: 3, property: 'Retail Space C', amount: 3000, status: 'Overdue', dueDate: '2023-09-01' },
  ]);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Invoice Processing</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Property</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map(invoice => (
            <tr key={invoice.id}>
              <td>{invoice.property}</td>
              <td>£{invoice.amount}</td>
              <td>{invoice.status}</td>
              <td>{invoice.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// =============== CONFIGURATION ===============
const customConfig: AppConfig = {
  title: "QuoinStone Group - Property Management",
  companyName: "QuoinStone Group",
  logo: "/path/to/quoinstone-logo.png",
  primaryColor: "#3B82F6",
  secondaryColor: "#60A5FA",
  userName: "Tim Struth",
  dashboard: {
    tabs: [
      {
        id: "propertyManagement",
        label: "Property Management",
        description: "Manage property occupancy and actions",
        icon: Home
      },
      {
        id: "invoiceProcessing",
        label: "Invoice Processing",
        description: "Handle invoice payments and tracking",
        icon: FileText
      },
    ] as TabConfig[],
    charts: {
      propertyStatus: {
        type: "pie",
        dataKeys: ["value"],
        colors: ["#3B82F6", "#60A5FA", "#93C5FD"],
        data: [
          { name: 'Vacant', value: 30 },
          { name: 'Occupied', value: 50 },
          { name: 'In Process', value: 20 },
        ]
      },
      invoiceStatus: {
        type: "bar",
        dataKeys: ["count"],
        colors: ["#3B82F6"],
        data: [
          { name: 'Pending', count: 15 },
          { name: 'Paid', count: 25 },
          { name: 'Overdue', count: 5 },
        ]
      },
    }
  },
  analytics: {
    charts: {
      propertyOccupancyRate: {
        type: "line",
        dataKeys: ["rate"],
        colors: ["#3B82F6"],
        data: [
          { month: 'Jan', rate: 75 },
          { month: 'Feb', rate: 78 },
          { month: 'Mar', rate: 80 },
          { month: 'Apr', rate: 82 },
        ]
      },
      invoiceProcessingEfficiency: {
        type: "bar",
        dataKeys: ["efficiency"],
        colors: ["#60A5FA"],
        data: [
          { month: 'Jan', efficiency: 85 },
          { month: 'Feb', efficiency: 87 },
          { month: 'Mar', efficiency: 90 },
          { month: 'Apr', efficiency: 92 },
        ]
      },
    }
  },
  clients: [
    { id: "client1", name: "Shopping Center A", industry: "Retail" },
    { id: "client2", name: "Office Building B", industry: "Commercial" },
    { id: "client3", name: "Retail Space C", industry: "Retail" },
  ],
  features: {
    propertyManagement: true,
    invoiceProcessing: true,
    reporting: true,
    clientCommunication: true
  }
};

// =============== CUSTOM COMPONENTS MAPPING ===============
const customComponents: CustomComponents = {
  propertyManagement: PropertyManagementComponent,
  invoiceProcessing: InvoiceProcessingComponent,
};

// =============== CUSTOM DATA ===============
const customData: CustomData = {
  propertyStatuses: ['Vacant', 'Occupied', 'In Process'],
  invoiceStatuses: ['Pending', 'Paid', 'Overdue'],
  actionTypes: ['Occupy', 'Vacate', 'Maintain'],
};

// =============== EXPORT ===============
export const customization = {
  config: customConfig,
  components: customComponents,
  data: customData,
};