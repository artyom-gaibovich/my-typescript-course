

//числовой енам
enum StatusCode {
    Success = 2,
    InProgress = 1,
    Failed = 2,
}


///
const result = {
    message: "Платёж успешен",
    statusCode: StatusCode.Success,
};

if (result.statusCode === StatusCode.Success) {
    console.log('SUCCESS !');
}


enum ArrowDirection {
    Up,
    Down,
    Left,
    Right,
}