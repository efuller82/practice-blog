module.exports = function (sequelize, DataTypes) {
    const Author = sequelize.define('Author', {
        name: DataTypes.STRING
    });

    Author.associate = function (models) {
        // associating Author with Posts
        // when an Author is deleted, also delete any associated Posts
        Author.hasMany(models.Post, {
            onDelete: 'cascade'
        });
    };

    return Author;
}