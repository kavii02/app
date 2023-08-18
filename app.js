const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./database'); 
const userRoutes = require('./routes/userRoutes');
const authRoutes=require('./routes/authRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const photoRoutes = require('./routes/photoRoutes');
const likeRoutes = require('./routes/likeRoutes');
const shareRoutes = require('./routes/shareRoutes');
const commentRoutes = require('./routes/commentRoutes');

const app = express();

app.use(bodyParser.json());


app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/uploads', uploadRoutes);
app.use('/api/photos', photoRoutes);
app.use('/api/likes', likeRoutes);
app.use('/api/shares', shareRoutes);
app.use('/api/comments', commentRoutes);



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
