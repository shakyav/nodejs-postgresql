// User model to represent the user table in the database


module.exports = (sqlz, sequelize) => {
    const User = sqlz.define("users", {
  
      userId: {
        type: sequelize.UUID,
        defaultValue: sequelize.UUIDV1,
        primaryKey: true,
        allowNull: false
        /* validate:{
          noUpdate: true
        } */
  
  
      },
  
  
      first_name: {
        type: sequelize.STRING,
        allowNull: false,
        validate : {
          notEmpty: true
        }
      },
      last_name: {
        type: sequelize.STRING,
        validate : {
          notEmpty: true
        },
        allowNull: false
  
      },
      email_address: {
        type: sequelize.STRING,
        validate: {
          isEmail : true,
         
        },
        allowNull: false
        
      },
      password: {
        type: sequelize.STRING,
        
        validate: {
          is : /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
          
          
        },
        allowNull: false
  
      }
    });
  
    return User;
  };