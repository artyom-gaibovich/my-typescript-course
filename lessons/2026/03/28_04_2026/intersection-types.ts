type WithId = { id: number };
type WithTimestamp = { createdAt: number, updatedAt: number };


// & - combiend types
//combine type = {id: number, createdAt: number, updatedAt: number, ...other fields }

type CommonType = {name : string} & WithId & WithTimestamp

const common: CommonType = {
    name: "Common",
    id: 1,
    createdAt: 10,
    updatedAt: 10,
}