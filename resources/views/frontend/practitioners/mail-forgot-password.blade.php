<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta name="viewport" content="width=device-width">
		<title>Please reset your password</title>
		<style type="text/css">
			body {
				width: 100% !important;
				min-width: 100%;
				-webkit-text-size-adjust: 100%;
				-ms-text-size-adjust: 100%;
				margin: 0;
				padding: 0;
				-moz-box-sizing: border-box;
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
			}
			body, table.body, h1, h2, h3, h4, h5, h6, p, td, th, a {
				color: #0a0a0a;
				font-family: Helvetica, Arial, sans-serif;
				font-weight: normal;
				font-size: 13px;
				line-height: 1.3;
				padding: 0;
				margin: 0;
			}
			img {
				outline: none;
				text-decoration: none;
				-ms-interpolation-mode: bicubic;
				width: auto;
				max-width: 100%;
				clear: both;
				display: block;
			}
			.center {
				width: 100%;
				min-width: 580px;
			}
			a img {
				border: none;
			}
			h1, h2, h3, h4, h5, h6, p {
				margin: 0 0 10px 0;
			}
			h1,
			.h1 {
				font-size: 2.25rem;
			}
			h2,
			.h2 {
				font-size: 1.875rem;
			}
			h3,
			.h3 {
				font-size: 1.5rem;
			}
			h4,
			.h4 {
				font-size: 1.125rem;
			}
			h5,
			.h5 {
				font-size: 0.875rem;
			}
			h6,
			.h6 {
				font-size: 0.75rem;
			}
			table {
				border-spacing: 0;
				border-collapse: collapse;
			}
			td {
				word-wrap: break-word;
				-webkit-hyphens: auto;
				-moz-hyphens: auto;
				hyphens: auto;
				border-collapse: collapse !important;
			}
			table, tr, td {
				padding: 0;
				vertical-align: top;
				text-align: left;
			}
			html {
				min-height: 100%;
				background: #f4f8f5;
			}
			table.body {
				background: #f4f8f5;
				height: 100%;
				width: 100%;
			}
			table.container {
				background: #fff;
				width: 580px;
				margin: 0 auto;
				text-align: inherit;
								border-radius: 10px;
			}
			.wraper{
				padding: 15px;
			}
			table.row {
				padding: 0;
				width: 100%;
				position: relative;
			}
			table.container table.row {
				display: table;
			}
			table.text-center,
			td.text-center,
			h1.text-center,
			h2.text-center,
			h3.text-center,
			h4.text-center,
			h5.text-center,
			h6.text-center,
			p.text-center,
			span.text-center {
				text-align: center;
			}
			table.text-left,
			td.text-left,
			h1.text-left,
			h2.text-left,
			h3.text-left,
			h4.text-left,
			h5.text-left,
			h6.text-left,
			p.text-left,
			span.text-left {
				text-align: left;
			}
			table.text-right,
			td.text-right,
			h1.text-right,
			h2.text-right,
			h3.text-right,
			h4.text-right,
			h5.text-right,
			h6.text-right,
			p.text-right,
			span.text-right {
				text-align: right;
			}
			span.text-center {
				display: block;
				width: 100%;
				text-align: center;
			}
			img.float-left {
				float: left;
				text-align: left;
			}
			img.float-right {
				float: right;
				text-align: right;
			}
			img.float-center,
			img.text-center {
				margin: 0 auto;
				float: none;
				text-align: center;
			}
			table.float-center,
			td.float-center,
			th.float-center {
				margin: 0 auto;
				float: none;
				text-align: center;
			}
			.logo {
				padding-bottom: 15px;
			}
			.hb-logo {
				width: 180px;
				height: auto;
				padding: 15px 0;
			}
			.lightbg {background-color:#f9f9f9;}
			.small { color:#555; font-size: 7pt; line-height:8pt; font-weight: normal;}			
			.btn {
				font-family: Helvetica, Arial, sans-serif;
				font-size: 1rem;
				line-height: 1.4;
				padding: 10px 20px;
				display: inline-block;
				text-transform: uppercase;
				border-radius: 10px;
				transition: all .3s;
				font-weight: 500;
				color: #fff;
				background-color: #44a86b;
				text-decoration: none;
			}
			.link {color: #44a86b; font-weight: bold; text-decoration: underline;}
			@media only screen and (max-width: 596px) {
				table.body .container {
					width: 95% !important;
				}
			}
		</style>
	</head>
	<body>
		<table class="body">
			<tr>
				<td class="center" align="center" valign="top">
					<center data-parsed="">
					<table>
						<tbody>
							<tr>
								<td style="height: 30px;">&nbsp;</td>
							</tr>
						</tbody>
					</table>
					<table class="container">
						<tbody>
							<tr>
								<td class="wraper">
									<table class="row" style="width: 100%">
										<tbody>
											<tr>
												<th class="logo">
													<a href="https://healthbuddha.ca/" target="_blank" align="center" class="text-center">
														<img src="https://healthbuddha.ca/wp-content/uploads/2022/02/logo.png" class="hb-logo" alt="HealthBuddha">
													</a>
												</th>
											</tr>
											<tr>
												<td>
													<h4>Reset your <strong>HealthBuddha</strong> password</h4>
													<p>&nbsp;</p>
													<p>Dear <b>{!! $practitioner_name !!},</b></p>
													<p>We heard that you lost your HealthBuddha password. Sorry about that!</p>
													<p>But don’t worry! You can use the following button to reset your password: </p>
													<p>&nbsp;</p>
													<p><a href="{{ route('practitioner-reset-password',$token) }}" target="_blank" class="btn" style="color:#FFF">Reset your password</a></p>
													<p>&nbsp;</p>
													
													<p>Thanks,<br><b>HealthBuddha Team</b></p>
													<p>&nbsp;</p>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table width="580">
						<tbody>
							<tr>
								<td style="height: 10px;">&nbsp;</td>
							</tr>
							<tr>
								<td class="text-center">You're receiving this email because a password reset was requested for your account.</td>
							</tr>
							<tr>
								<td style="height: 40px;">&nbsp;</td>
							</tr>
						</tbody>
					</table>
					</center>
				</td>
			</tr>
		</table>
	</body>
</html>