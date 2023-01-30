pub mod api;
pub use api::*;

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn api_works() {
        Request {
            field: "foo".to_owned(),
            value: "value".to_owned(),
        };
        Response {
            message: "message".to_owned(),
        };
    }
}
