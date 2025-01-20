import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserManagement from "@/components/admin/UserManagement";
import TicketManagement from "@/components/admin/TicketManagement";
import SystemSettings from "@/components/admin/SystemSettings";
import { Card } from "@/components/ui/card";

const AdminView = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      </div>
      
      <Tabs defaultValue="users" className="space-y-4">
        <TabsList>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="tickets">Ticket Management</TabsTrigger>
          <TabsTrigger value="settings">System Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="users" className="space-y-4">
          <Card className="p-6">
            <UserManagement />
          </Card>
        </TabsContent>
        
        <TabsContent value="tickets" className="space-y-4">
          <Card className="p-6">
            <TicketManagement />
          </Card>
        </TabsContent>
        
        <TabsContent value="settings" className="space-y-4">
          <Card className="p-6">
            <SystemSettings />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminView;