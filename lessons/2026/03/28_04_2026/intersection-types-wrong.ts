type WithId = { id: number };
type WithTimestampCreate = { createdAt: number };
type WithTimestampUpdate = { updatedAt: number };
type Name = { name: string };


// & - combiend types
//combine type = {id: number, createdAt: number, updatedAt: number, ...other fields }

type CommonType = WithId & WithTimestampCreate & WithTimestampUpdate & Name

const common: CommonType = {
    name: "Common",
    id: 1,
    createdAt: 10,
    updatedAt: 10,
}