# SSL Certificate Troubleshooting Guide

## 🔒 Netlify SSL Issues - Complete Solution

### **Common SSL Issues & Solutions:**

#### 1. **"Site Not Secure" Warning**
**Problem**: Browser shows "Not Secure" even with Netlify SSL
**Solution**: 
- Go to Netlify Dashboard → Your Site → Site Settings → Domain Management
- Ensure "Force HTTPS" is enabled
- Check that your custom domain (if any) has SSL certificate provisioned

#### 2. **Mixed Content Warnings**
**Problem**: Some resources loading over HTTP instead of HTTPS
**Solution**:
- Check all external links in your code use `https://`
- Update any hardcoded `http://` URLs to `https://`
- Ensure all images, scripts, and stylesheets use HTTPS

#### 3. **SSL Certificate Not Provisioned**
**Problem**: Netlify hasn't issued SSL certificate yet
**Solution**:
- Wait 24-48 hours for automatic SSL provisioning
- Manually trigger SSL certificate in Netlify dashboard
- Check domain DNS settings are correct

### **Step-by-Step SSL Fix:**

#### **Step 1: Verify Netlify SSL Settings**
1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Select your site
3. Go to **Site Settings** → **Domain Management**
4. In **HTTPS** section:
   - ✅ Enable "Force HTTPS"
   - ✅ Enable "Automatic TLS certificates"
   - ✅ Enable "HSTS" (HTTP Strict Transport Security)

#### **Step 2: Check Domain Configuration**
1. In **Domain Management**:
   - Verify your custom domain (if using one)
   - Ensure DNS records point to Netlify
   - Check for any DNS propagation delays

#### **Step 3: Force HTTPS Redirects**
The `netlify.toml` file I created includes:
```toml
# Force HTTPS
[[redirects]]
  from = "http://:host/*"
  to = "https://:host/:splat"
  status = 301
  force = true
```

#### **Step 4: Security Headers**
The configuration includes security headers:
- `Strict-Transport-Security`
- `X-Frame-Options`
- `X-Content-Type-Options`
- `Referrer-Policy`

### **Manual SSL Verification:**

#### **Check SSL Certificate:**
```bash
# Check if SSL is working
curl -I https://your-site.netlify.app

# Check certificate details
openssl s_client -connect your-site.netlify.app:443 -servername your-site.netlify.app
```

#### **Test HTTPS Redirect:**
```bash
# Should redirect to HTTPS
curl -I http://your-site.netlify.app
```

### **Common Fixes:**

#### **1. Clear Browser Cache**
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache completely
- Try incognito/private browsing mode

#### **2. Check External Resources**
Ensure all external links use HTTPS:
```html
<!-- ✅ Correct -->
<script src="https://cdn.jsdelivr.net/..."></script>
<img src="https://example.com/image.jpg" />

<!-- ❌ Incorrect -->
<script src="http://cdn.jsdelivr.net/..."></script>
<img src="http://example.com/image.jpg" />
```

#### **3. Update Content Security Policy**
The `netlify.toml` includes a CSP that allows necessary resources while maintaining security.

### **Deployment Commands:**

#### **Using Netlify CLI:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy with SSL
netlify deploy --prod --dir=dist
```

#### **Manual Deployment:**
1. Build your project: `npm run build`
2. Go to [Netlify](https://app.netlify.com)
3. Drag and drop the `dist` folder
4. Wait for deployment
5. Enable SSL in site settings

### **SSL Status Check:**

#### **Green Lock Indicators:**
- ✅ **Secure**: All resources loaded over HTTPS
- ⚠️ **Mixed Content**: Some resources over HTTP
- ❌ **Not Secure**: No SSL certificate

#### **Browser Developer Tools:**
1. Open Developer Tools (F12)
2. Go to **Security** tab
3. Check for mixed content warnings
4. Verify certificate details

### **Still Having Issues?**

#### **Contact Netlify Support:**
- Go to [Netlify Support](https://www.netlify.com/support/)
- Include your site URL and specific error messages
- Mention you've enabled Force HTTPS and automatic TLS

#### **Alternative Solutions:**
- Use Netlify's built-in domain with SSL
- Consider using Cloudflare for additional SSL layer
- Check if your custom domain provider supports SSL

### **Quick SSL Test:**
Visit your site and check:
- URL starts with `https://`
- Green lock icon in browser
- No mixed content warnings in console
- Security headers are present

---

**Need Help?** Check the browser console for specific error messages and refer to this guide for targeted solutions. 