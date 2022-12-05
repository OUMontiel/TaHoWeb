import { Model, DataTypes } from 'sequelize';
import { sequelize } from './index.js';
import jwt from 'jsonwebtoken';
const { sign } = jwt;
import bcrypt from 'bcrypt';
import { jwtSecret } from '../config/index.js';

export class UserWorker extends Model {
    async generateToken(isWorker) {
        if (!jwtSecret) {
            throw new Error('No JWT Secret has been defined');
        }
        const id = (isWorker ? 'w' : 'u') + this.id.toString();
        const token = sign({ id }, jwtSecret, {
            expiresIn: '10h',
        });
        this.token = token;
        await this.save();
        return token;
    }

    comparePassword(password) {
        return bcrypt.compare(password, this.password);
    }

    static hashPassword(password) {
        return bcrypt.hash(password, 10);
    }
}

export class User extends UserWorker {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'users',
        timestamps: true,
    },
);

export class Worker extends UserWorker {}

Worker.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rfc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        certificates: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        services: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'workers',
        timestamps: true,
    },
);

export class Job extends Model {}

Job.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id',
            },
            allowNull: false,
        },
        workerId: {
            type: DataTypes.INTEGER,
            references: {
                model: Worker,
                key: 'id',
            },
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'jobs',
        timestamps: true,
    },
);

Job.hasOne(User);
Job.hasOne(Worker);
