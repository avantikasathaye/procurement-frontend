import React, {useState}from 'react';
import { Avatar, Box, Card } from '@mui/material';
import { Scrollbar, DeptRequests_AddRecord } from '../../statelessViews';
import { useDispatch } from 'react-redux';

export const AddDepartmentRequests = (props) => {
  const dispatch = useDispatch();
  const { products } = props;

  const [value, setValue] = useState('one');

  const [requestedProductName, setRequestedProductName] = useState("")
  const [requestedProductQuantity, setRequestedProductQuantity] = useState("")
  const [requestingDepartmentName, setRequestingDepartmentName] = useState("")
  const [batchNumber, setBatchNumber] = useState("")
  const [dateRequested, setDateRequested] = useState("")
  const [dateFulfilled, setDateFulfilled] = useState("")
  const [fulfillmentStatus, setFulfillmentStatus] = useState("")

  const updateInventoryCount = (status, availableQuantity) => {
    if(status === "Closed"){
      console.log("Update Inventory Count Here ...")

      //TO DO: 
      // API awaited for updating records status 'Closed' and further trigger updating 'Invntory' table to reduce the 
      // 'totalAvailableQuantity count according the requested record. 

    }else{
      console.log("status: " + status)
    }
  }
  
  const tempSaveRequestedProductName = (reqProdName) => {
    setRequestedProductName(reqProdName)
    localStorage.setItem('requestedProductName', reqProdName)
  }

  const tempSaveRequestedProductQuantity = (reqProdQuantity) => {
    setRequestedProductQuantity(reqProdQuantity);
    localStorage.setItem("requestedProductQuantity", reqProdQuantity)
  }

  const tempSaveBatchNumber = (batchNumber) => {
    setBatchNumber(batchNumber);
    localStorage.setItem("batchNumber", batchNumber)
  }

  const tempSaveRequestingDepartmentName = (reqDepartmentName) => {
    setRequestingDepartmentName(reqDepartmentName);
    localStorage.setItem("requestingDepartmentName", reqDepartmentName)
  }

  const tempSaveDateRequested = (dateRequested) => {
    setDateRequested(dateRequested);
    localStorage.setItem("dateRequested", dateRequested)
  }

  const tempSaveDateFulfilled = (dateFulfilled) => {
    setDateFulfilled(dateFulfilled);
    localStorage.setItem("dateFulfilled", dateFulfilled)
  }

  const tempSaveFulfillmentStatus = (fulfillmentStatus) => {
    setFulfillmentStatus(fulfillmentStatus);
    localStorage.setItem("fulfillmentStatus", fulfillmentStatus)
  }

  return (
    <div style={{display: "flex", flexDirection: "row"}}>
    <Card style={{marginRight: "20px"}}>
    </Card>
    <Card style={{minWidth: 1000}}>
      <Scrollbar>
        <Box >
        <DeptRequests_AddRecord props={props} tempSaveRequestedProductName={tempSaveRequestedProductName} 
                    tempSaveRequestedProductQuantity={tempSaveRequestedProductQuantity}
                    tempSaveBatchNumber={tempSaveBatchNumber} tempSaveRequestingDepartmentName={tempSaveRequestingDepartmentName} 
                    tempSaveDateRequested={tempSaveDateRequested}
                    tempSaveDateFulfilled={tempSaveDateFulfilled} tempSaveFulfillmentStatus={tempSaveFulfillmentStatus} 
                    onClickAdd={props.onAdd} updateInventoryCount={updateInventoryCount}/>
        </Box>
      </Scrollbar>
    </Card>
    </div>
  );
};
