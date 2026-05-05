
type SuccessData = any
type ErrorData = any


type Response = {
    status: "success" | "failed";
    data?: SuccessData;
    error?: ErrorData;
}


