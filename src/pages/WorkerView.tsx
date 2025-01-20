import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, AlertTriangle, MessageSquare, CheckCircle } from "lucide-react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Textarea } from "@/components/ui/textarea";

const WorkerView = () => {
  return (
    <div className="h-[calc(100vh-4rem)]">
      <ResizablePanelGroup direction="horizontal">
        {/* Left Panel - Ticket Details & Actions */}
        <ResizablePanel defaultSize={60}>
          <div className="h-full p-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Ticket Details</CardTitle>
                <CardDescription>View and manage ticket information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Status</h3>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="open">Open</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="resolved">Resolved</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Priority</h3>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Response</h3>
                  <Textarea placeholder="Type your response here..." className="min-h-[100px]" />
                  <div className="flex gap-2">
                    <Button>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Send Response
                    </Button>
                    <Button variant="outline">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Resolve
                    </Button>
                    <Button variant="destructive">
                      <AlertTriangle className="mr-2 h-4 w-4" />
                      Escalate
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* Right Panel - Ticket Dashboard */}
        <ResizablePanel defaultSize={40}>
          <Card className="h-full rounded-none border-0">
            <CardHeader>
              <CardTitle>Ticket Dashboard</CardTitle>
              <CardDescription>Manage and respond to customer tickets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                    <Input placeholder="Search tickets..." className="pl-8" />
                  </div>
                  <div className="flex gap-2">
                    <Select>
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="open">Open</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="resolved">Resolved</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="text-center text-gray-500 py-8">
                  No tickets assigned yet
                </div>
              </div>
            </CardContent>
          </Card>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default WorkerView;