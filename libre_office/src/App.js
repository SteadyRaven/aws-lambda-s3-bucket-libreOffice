import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import axios from 'axios';
// import AWS from "aws-sdk";

// const s3 = new AWS.S3();
function App() {
  const [file, setFile] = useState();

  function handleChange(event) {
    debugger;
    setFile(event.target.files[0])
  }
  // let uploadParams = {
  //   Bucket: 'your-bucket-name', // Replace with your S3 bucket name
  //   Key: 'path/to/uploaded-file.docx', // Specify the key (path) in the bucket where the file will be stored
  //   Body: null, // We'll set this to the file content
  // };

  function handleSubmit(event) {
    event.preventDefault();
    // const serverurl = process.env.REACT_APP_SERVER_URL;
    console.log(process.env);
    // console.log(serverurl);
    console.log(process.env);
    const formData = new FormData();
    formData.append('doc', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post( 'http://localhost:5000/api/upload', formData, config).then((response) => {
      console.log(response.data);
    }).catch(error => console.log(error));
  }
  
  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
          <h1>React File Upload</h1>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
    </div>
  );
}

export default App;
