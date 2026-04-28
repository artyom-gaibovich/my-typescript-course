
enum LoadingStatus {
    Pending = "PENDING",
    Approved = "APPROVED",
    Rejected = "REJECTED",
    Failed = "FAILED",
}

interface Response {
    id : number;
    status: LoadingStatus
}

function processApplication(status: LoadingStatus) {
    if (status === LoadingStatus.Failed) {
        console.log("Заявка одобрена");
    }
}

async function main() {
    const result = await fetch("http://localhost:3000/loading-status")
    const data: Response = await result.json();


    processApplication(data.status)
    console.log(data)
}

main();