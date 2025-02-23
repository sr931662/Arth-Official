const mongoose = require("mongoose");

// User Schema
const UserSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        unique: true, 
        required: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    role: { 
        type: String, 
        enum: ["admin", "subscriber", "artist", "publisher"], 
        default: "subscriber" 
    },
    profilePic: { 
        type: String 
    },
    bio: { 
        type: String 
    },
    wallet: {
        balance: { 
            type: Number, 
            default: 0 
        },
        cryptoBalance: { 
            type: Number, 
            default: 0 
        }
    },
    subscriptions: [{ 
        plan: { 
            type: String, 
            enum: ["free", "premium"], 
            default: "free" 
        }, 
        expiry: { 
            type: Date,
            required: true
        }
    }],
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

// Art & Literature Schema
const ContentSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String 
    },
    category: { 
        type: String, 
        enum: ["art", "literature"], 
        required: true 
    },
    tags: [String],
    fileUrl: { 
        type: String, 
        required: true 
    },
    artist: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: true  // Add this to ensure every content has an artist
    },
    likes: { 
        type: Number, 
        default: 0 
    },
    comments: [{ 
        user: mongoose.Schema.Types.ObjectId, 
        text: String 
    }],
    isApproved: { 
        type: Boolean, 
        default: false 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

// NFT Schema
const NFTSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String 
    },
    artist: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    },
    imageUrl: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    blockchain: { 
        type: String, 
        enum: ["Ethereum", "Polygon"], 
        required: true 
    },
    owner: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" 
    },
    transactionHistory: [{
        buyer: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "User" },
        date: { 
            type: Date, 
            default: Date.now 
        },
        price: { 
            type: Number
        }
    }],
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

// Subscription Schema
const SubscriptionSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true 

    },
    plan: { 
        type: String, 
        enum: ["free", "premium"], 
        required: true 

    },
    price: { 
        type: Number, 
        required: true 

    },
    duration: { 
        type: String, 
        enum: ["monthly", "quarterly", "yearly"], 
        required: true 

    },
    paymentStatus: { 
        type: String, 
        enum: ["pending", "completed", "failed"], 
        required: true 

    },
    createdAt: { 
        type: Date, 
        default: Date.now 

    }
});

// Payment Schema
const PaymentSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
        
    },
    amount: { 
        type: Number, 
        required: true 
        
    },
    currency: { 
        type: String, 
        default: "INR" 
        
    },
    method: { 
        type: String, 
        enum: ["razorpay", "stripe", "crypto"], 
        required: true 
        
    },
    transactionId: { 
        type: String, 
        unique: true, 
        required: true 
        
    },
    status: { 
        type: String, 
        enum: ["success", "failed", "pending"], 
        default: "pending" 
        
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
        
    }
});

// Admin Approval Schema
const AdminApprovalSchema = new mongoose.Schema({
    content: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Content", 
        required: true 
        
    },
    admin: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" 
        
    },
    status: { 
        type: String, 
        enum: ["approved", "rejected", "pending"], 
        default: "pending" 
        
    },
    remarks: { 
        type: String 
        
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
        
    }
});

// Export Models
const User = mongoose.model("User", UserSchema);
const Content = mongoose.model("Content", ContentSchema);
const NFT = mongoose.model("NFT", NFTSchema);
const Subscription = mongoose.model("Subscription", SubscriptionSchema);
const Payment = mongoose.model("Payment", PaymentSchema);
const AdminApproval = mongoose.model("AdminApproval", AdminApprovalSchema);

module.exports = { User, Content, NFT, Subscription, Payment, AdminApproval };