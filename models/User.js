import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
  },
  username: {
    type: String,
    unique: [true, 'Username must be unique'],
    required: [true, 'Username is required'],
  },

  email: {
    type: String,
    unique: [true, 'Email must be unique'],
    required: [true, 'Email is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must have at least 6 characters'],
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Password confirm is required'],
    validate: {
      validator: function (val) {
        return this.password === val;
      },
      message: "Passwords don't match",
    },
  },
  creationDate: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  } catch (err) {
    console.log(err);
  }
  this.passwordConfirm = undefined;

  next();
});

userSchema.statics.login = async function (username, password) {
  const user = await this.findOne({ username });
  if (!username) {
    throw new Error('Username is required');
  }
  if (!password) {
    throw new Error('Password is required');
  }
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    } else throw new Error('Password is incorrect');
  }
  throw new Error("This username doesn't exist");
};

const User = mongoose.model('User', userSchema);

export default User;