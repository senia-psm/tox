initSidebarItems({"constant":[["EXTRA_LENGTH","Minimal size in bytes of an encrypted file."],["KEY_LENGTH","Number of bytes in a `PrecomputedKey`."],["MAGIC_LENGTH","Length (in bytes) of `MAGIC_NUMBER`."],["MAGIC_NUMBER","Bytes used to verify whether given data has been encrypted using **TES**."],["SALT_LENGTH","Number of bytes in a `Salt`."]],"enum":[["DecryptionError","Error when trying to decrypt data."],["EncryptionError","Error encrypting data."],["KeyDerivationError","Deriving secret key for `PassKey`."]],"fn":[["get_salt","Get `Salt` from data encrypted with **TES**."],["is_encrypted","Check if given piece of data appears to be encrypted by **TES**."],["pass_decrypt","Try to encrypt given **TES** data with provided passphrase."],["pass_encrypt","Try to encrypt given **TES** data with provided passphrase."]],"struct":[["PassKey","Key and `Salt` that are used to encrypt/decrypt data."]]});