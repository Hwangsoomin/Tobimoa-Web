const express = require("express");
const router = express.Router();
const path = require("path");

router.get('/', (req, res, next) =>{
    console.log("11");
    alert("11");
    res.send('<script type="text/javascript">alert("이게 뭐야"); window.location="/"; </script>');
});

module.exports = router;