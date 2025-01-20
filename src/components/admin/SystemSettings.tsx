import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const SystemSettings = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">System Settings</h2>
        <Button>Save Changes</Button>
      </div>

      <div className="grid gap-6">
        <Card className="p-4">
          <h3 className="text-lg font-medium mb-4">Notification Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications">Email Notifications</Label>
              <Switch id="email-notifications" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="escalation-alerts">Escalation Alerts</Label>
              <Switch id="escalation-alerts" />
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <h3 className="text-lg font-medium mb-4">System Thresholds</h3>
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="ticket-timeout">Ticket Timeout (hours)</Label>
              <Input id="ticket-timeout" type="number" defaultValue={48} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="max-escalations">
                Maximum Escalation Level
              </Label>
              <Input id="max-escalations" type="number" defaultValue={3} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SystemSettings;