import React from "react";
import "./page.css";
import { Button } from "@ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ui/components/card";
import { Input } from "@ui/components/input";
import { Label } from "@ui/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/components/select";

function page() {
  return (
    <div className="container2">
      <div className="footer-box">
        <Input
          placeholder="enter message.."
          style={{
            backgroundColor: "black",
            color: "white",
            height: "50px",
            fontSize: "20px",
          }}
        />
        <Button className="footer-button">send</Button>
      </div>
    </div>
  );
}

export default page;
