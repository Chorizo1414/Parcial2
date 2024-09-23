
module.exports = (sequelize, Sequelize) => {
	const Cancion = sequelize.define('cancion', {	
	  id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
    },
	  nombre: {
			type: Sequelize.STRING
	  },
	  descripcion: {
			type: Sequelize.STRING
  	},
	  artista: {
			type: Sequelize.STRING
	  },
	  duracion: {
			type: Sequelize.STRING
    },
	  formato: {
		    type: Sequelize.STRING
	  },
	  album: {
		    type: Sequelize.STRING
    },
	  año: {
			type: Sequelize.STRING
	  },

    copyrightby: {
      type: Sequelize.STRING,
      defaultValue: 'UMG Antigua'
    }
	});
	
	return Cancion;
}