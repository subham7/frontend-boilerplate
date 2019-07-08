import ROOTURL from "../ROOTURL";
import axios from "axios"
import { Row } from "antd";

export const receiptById = (rid) => axios.get(`${ROOTURL}/receipts/${rid}`)

export const receiptTransactionType = (rid) => axios.get(`${ROOTURL}/transactions?_where=(receipt,eq,${rid})&_unfold={"transactiontype":["name"]}`)
