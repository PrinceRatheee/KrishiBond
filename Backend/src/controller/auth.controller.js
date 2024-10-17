import Farmer from "../models/farmer.model.js";
import Company from "./../models/company.model.js";


export const farmerSignUp = async (req, res) => {
    try {
      const { name, contact, address, farmSize } = req.body;
  
      
      if (!name || !contact || !address) {
        return res.status(400).json({
          message: "Name, contact, and address are required fields",
        });
      }
      const existingFarmer = await Farmer.findOne({ contact });
      if (existingFarmer) {
        return res
          .status(400)
          .json({ message: "Farmer with this contact already exists" });
      }

      const newFarmer = new Farmer({
        name,
        contact,
        address,
        farmSize,  
      });
  
      const savedFarmer = await newFarmer.save();
  
      res.status(201).json({
        message: "Farmer signed up successfully!",
        farmer: savedFarmer,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error signing up farmer", error: error.message });
    }
  };
  
export const CompanySignUp = async (req, res) => {
  try {
    const { name, contact, address } = req.body;

    if (!name || !contact || !address) {
      return res.status(400).json({
        message: "Name, contact, and address are required fields",
      });
    }

    const existingCompany = await Company.findOne({ contact });
    if (existingCompany) {
      return res
        .status(400)
        .json({ message: "Company with this contact already exists" });
    }

    const newCompany = new Company({
      name,
      contact,
      address,
    });

    const savedCompany = await newCompany.save();

    res.status(201).json({
      message: "Company signed up successfully!",
      company: savedCompany,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error signing up company", error: error.message });
  }
};
