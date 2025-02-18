import stylef from "./MoreDetailsForm.module.css";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  Upload,
} from "antd";
import { Dayjs } from "dayjs";
import { useState } from "react";




const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export default function MoreDetailsForm() {

  const [image, setImage] = useState<any>();
  const [dob, setDOB] = useState<Dayjs|number>();
  const [preference, setPreference] = useState();
  const [gender, setGender] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [village, setVillage] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [pincode, setPincode] = useState<string>("");
 

  return (
    <Form layout="vertical">
      <Form.Item className={stylef.upload_component} valuePropName="file" getValueFromEvent={normFile}>
        <Upload
          onChange={ (e) => setImage(e.file) }
          className={stylef.image_upload}
          action="/upload.do"
          listType="picture-card"
          maxCount={1}
        >
          <button style={{ border: 0, background: "none" }} type="button">
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </button>
        </Upload>
      </Form.Item>
      <Form.Item label="Date of Birth">
        <DatePicker onChange={(e) => console.log(e.date.toString()) } className={stylef.dob} />
      </Form.Item>
      <Form.Item label="Select Preference">
        <Select placeholder="Select your preference" onChange={(e) => setPreference(e)} >
          <Select.Option value="Buyer">Buyer</Select.Option>
          <Select.Option value="Seller">Seller</Select.Option>
          <Select.Option value="Agent">Agent</Select.Option>
          <Select.Option value="Don't know now">Don't know now</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Gender">
        <Select onChange={ (e) => setGender(e)}  placeholder="Select your gender">
          <Select.Option value="Male">Male</Select.Option>
          <Select.Option value="Female">Female</Select.Option>
          <Select.Option value="Others">Others</Select.Option>
        </Select>
      </Form.Item>
      <div className={stylef.location_form}>
        <h3>Location Details</h3>
        <Form.Item label="Address Line">
          <Input placeholder="Enter your address details" onChange={(e) => setAddress(e.target.value)} required= {true}/>
        </Form.Item>
        <div className={stylef.internal_location_form}>
          <Form.Item className={stylef.location_input} label="Village/Taluka">
            <Input required= {true} placeholder="Enter your village name" onChange={(e) => setVillage(e.target.value)}/>
          </Form.Item>
          <Form.Item className={stylef.location_input} label="District">
            <Input placeholder="Enter your District name" onChange={(e) => setDistrict(e.target.value)}/>
          </Form.Item>
          <Form.Item className={stylef.location_input} label="State">
            <Input placeholder="Enter your State name" onChange={(e) => setState(e.target.value)}/>
          </Form.Item>
          <Form.Item className={stylef.location_input} label="Pincode">
            <Input
              placeholder="Enter the pincode"
              inputMode="numeric"
              type="number"
              maxLength={6}
              onChange={(e) => setPincode(e.target.value)}
            />
          </Form.Item>
        </div>
      </div>
        <div className={stylef.btns_container}>
          <Button className={stylef.btns1} type="link" >Do it later...</Button>
          <Button className={stylef.btns2} type="primary">Submit</Button>
        </div>
    </Form>
  );
}

// import momentGenerateConfig from "rc-picker/es/generate/moment";
// import { UserOutlined, SearchOutlined } from "@ant-design/icons";
// import { Button, Form, Input, Select, Space, Flex, Typography } from "antd";

// const { Search } = Input;

// const preference_options = [
//   {
//     value: "Buyer",
//     label: "Buyer",
//   },
//   {
//     value: "Seller",
//     label: "Seller",
//   },
//   {
//     value: "Agent",
//     label: "Agent",
//   },
//   {
//     value: "Don't know now",
//     label: "Don't know now",
//   },
// ];

// const Gender_option = [
//   {
//     value: "Male",
//     label: "Male",
//   },
//   {
//     value: "Female",
//     label: "Female",
//   },
// ];
{
  /* <br />
      <Input placeholder="default size" prefix={<UserOutlined />} />
      <br />
      <br />
      <Select defaultValue="Select preference" options={preference_options} />
      <br />
      <br />
      <Select defaultValue="Gender" options={Gender_option} />

      <h3>Location Details</h3>


      


      <Typography color="White">Address Line</Typography>
      <Form.Item  required tooltip="This is a required field">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Input
        count={{
          show: true,
          max: 50,
        }}
        defaultValue="e.g.: Lane No 14...."
      />


      <Typography>Village / Taluka</Typography>
      
      <Input 
        count={{
          show: true,
          max: 50,
        }}
        defaultValue="e.g.: Kondhwa"
      />


      <Typography color="White">District</Typography>
      <Input
        count={{
          show: true,
          max: 50,
        }}
        defaultValue="e.g.: Pune"
      />
      <Typography color="White">State</Typography>
      <Input
        size="middle"
        count={{
          show: true,
          max: 50,
        }}
        defaultValue="e.g.: Maharashtra"
      />
      <br />
      <br />
      <Space direction="vertical" size="middle">
        <Space.Compact>
          <Input defaultValue="Enter your pin code" />
        </Space.Compact>
      </Space>

      <br />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "5vh",
        }}
      >
        <Button
          type="primary"
          style={{ backgroundColor: "#1890ff", borderColor: "#1890ff", marginRight: "100px" }}
        >
          Do it later
        </Button>
        <Button
          type="primary"
          style={{ backgroundColor: "#1890ff", borderColor: "#1890ff" }}
        >
          Save
        </Button>
      </div> */
}
