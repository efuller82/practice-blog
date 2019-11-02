module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define('Post', {
        title: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allownull: false,
            len: [1]
        }
    });
    Post.associate = function (models) {
        // Post should belong to an Author
        // a Post can't be created w/o Author due to the foreign key constraint
        Post.belongsTo(models.Author, {
            foreignKey: {
                allownull: false
            }
        });

        return Post;
    };
};