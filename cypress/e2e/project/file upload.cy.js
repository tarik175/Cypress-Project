describe("File upload",()=>{
    it("single file upload",()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")

        const path1="image1.png"
        const path2="image2.png"
        cy.get('#filesToUpload').attachFile(path1).attachFile(path2)
    })
})