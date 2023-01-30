fn main() -> Result<(), Box<dyn std::error::Error>> {
    let current_dir = match std::env::current_dir() {
        Ok(current_dir) => current_dir,
        Err(error) => return Err(Box::new(error)),
    };
    let models_dir = current_dir
        .join("../../../../tools/models")
        .canonicalize()?;
    let api_proto_path = models_dir.join("api.proto");
    let out_dir = current_dir.join("src");
    tonic_build::configure()
        .build_server(false)
        .build_client(false)
        .out_dir(out_dir)
        .compile(&[&api_proto_path], &[models_dir])?;
    println!("cargo:rerun-if-changed=build.rs");
    println!("cargo:rerun-if-changed={}", api_proto_path.display());
    Ok(())
}
