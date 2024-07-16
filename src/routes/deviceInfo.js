const express = require("express");
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     DeviceInfo:
 *       type: object
 *       required:
 *         - userId
 *         - baseOS
 *         - version
 *       properties:
 *         userId:
 *           type: string
 *           description: The user ID
 *         baseOS:
 *           type: string
 *           description: The base operating system
 *         version:
 *           type: string
 *           description: The version of the device
 */

/**
 * @swagger
 * tags:
 *   name: DeviceInfo
 *   description: Device information management
 */

/**
 * @swagger
 * /adddeviceinfo:
 *   post:
 *     summary: Add new device information
 *     tags: [DeviceInfo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DeviceInfo'
 *     responses:
 *       200:
 *         description: The device information was successfully added
 *       500:
 *         description: Some server error
 */
router.post("/adddeviceinfo", (req, res) => {
  const { userId, baseOS, version } = req.body;

  // Hier kommt die Logik zum Hinzufügen von DeviceInfo in die Datenbank
  // Dies ist nur ein Beispiel, daher machen wir keine echte Datenbankoperation

  res.status(200).send("Device information added");
});

module.exports = router;
