

type SuccessResponse = {
    status: "success"
    data: {
        id: string
        message: string
    };
}

type ErrorResponse = {
    status: "error",
    error: {
        code: "400" | "401 "  // и все 400-ые, и 500-ые
        message: string
    }
}

type Response = SuccessResponse | ErrorResponse


function handleResponse(response: Response) {
    if (response.status === "success") {
        console.log(response.data.id)
    }
    if (response.status === "error") {
        console.log(response.error.code)
    }
}
